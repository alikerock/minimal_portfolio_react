import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { supabase } from "../supabase";

const Home = ({ data }) => {
  // Supabase Storage URL 생성 함수
  const getPublicUrl = (path) => {
    if (!path) return ""; // path가 유효하지 않으면 빈 문자열 반환
    const { data: publicUrlData } = supabase.storage
      .from("portfolio") // 버킷 이름
      .getPublicUrl(path);
    return publicUrlData.publicUrl;
  };
  console.log(data);
  return (
    <div>
      <Header />
      <main className="content">
        <div className="container latest_portfolio">
          <div className="row list">
            {data.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="contents shadow">
                  {/* Supabase URL로 변환된 이미지 */}
                  <img
                    src={getPublicUrl(item.thumbnail)}
                    alt={item.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="hover_contents">
                    <div className="list_info">
                      <h3>
                        <a href={`/portfolio/${item.id}`}>{item.title}</a>
                        <img
                          src="images/portfolio_list_arrow.png"
                          alt="list arrow"
                        />
                      </h3>
                      <p>
                        <a href={`/portfolio/${item.id}`}>Click to see project</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
