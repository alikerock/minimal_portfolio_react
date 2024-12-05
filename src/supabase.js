import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ahledrrodyyjmxzicutq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFobGVkcnJvZHl5am14emljdXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODg4MjgsImV4cCI6MjA0ODk2NDgyOH0.UAS8Uk1-eWsKNGpcb3QecpspyWFNbGmtOaNoSNOZfvI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;



