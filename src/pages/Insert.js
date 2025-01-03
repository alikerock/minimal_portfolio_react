import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 리다이렉션을 위한 useNavigate 훅
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { supabase } from "../supabase";

const Insert = ({ setProjects, projects }) => {

  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [file, setFile] = useState(null); // 첨부파일 상태 추가

  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile); // 첨부파일 상태 저장
  };
  const handleLogout = (e) => {
    supabase.auth.signOut()
  };

  const InsertData = async (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지

    // 파일 업로드 후 경로 저장
    let thumbnailPath = null;
    if (file) {
      const uploadedPath = await uploadFile(file); // 업로드 후 경로 받아오기
      if (uploadedPath) {
        thumbnailPath = uploadedPath;
      } else {
        alert("파일 업로드 실패");
        return; // 업로드 실패 시 데이터 삽입 중단
      }
    }
    // 삽입할 데이터 변수 생성
    const newData = {
      title: formData.title,
      content: formData.content,
      thumbnail: thumbnailPath, // 업로드된 경로 추가
    };

    // 데이터 삽입
    const { error } = await supabase.from("portfolio").insert(newData);

    if (error) {
      console.error("데이터 삽입 실패:", error);
      alert("데이터 삽입 실패");
    } else {
      console.log("데이터 삽입 성공:", newData);

      // projects가 배열인지 확인 후 상태 업데이트
      if (Array.isArray(projects)) {
        setProjects([newData, ...projects]); // 새 항목을 리스트 맨 앞에 추가
      } else {
        console.error("projects가 배열이 아닙니다.");
      }
      alert("데이터 입력이 완료되었습니다."); // 알림 표시
      navigate("/"); // 홈으로 이동
    }

  };

  // 파일 업로드 함수
  async function uploadFile(file) {
    const uniqueFileName = `${Date.now()}-${file.name}`; // 고유 파일 이름 생성
    const filePath = `thumnail/${uniqueFileName}`; // 고유 경로 정의

    const { data, error } = await supabase.storage.from("portfolio").upload(filePath, file);
    if (error) {
      console.error("파일 업로드 실패:", error);
    } else {
      console.log("파일 업로드 성공:", data);
      return filePath; // 업로드된 경로 반환
    }
  }
  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (
      <div>
        <Header />
        <main className="content contact_form">
          <div className="container about_content shadow">
            <h2>데이터 입력</h2>

            <form onSubmit={InsertData}>
              <p className="field">
                <label htmlFor="title">제목</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </p>
              <p className="field">
                <label htmlFor="content">내용</label>
                <textarea
                  name="content"
                  id="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                ></textarea>
              </p>
              <p className="field">
                <label htmlFor="thumbnail">썸네일</label>
                <input type="file" id="thumbnail" name="thumbnail" onChange={handleFileChange} />
              </p>
              <p className="submit">
                <input type="submit" className="primary-btn" value="입력" />
              </p>
            </form>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
};

export default Insert;
