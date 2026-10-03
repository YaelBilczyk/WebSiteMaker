// =================================================================
// הגדרת חיבור לבסיס הנתונים בענן (Supabase)
// =================================================================

// הדבק כאן את הפרטים מתוך ה-Dashboard של Supabase
const SUPABASE_URL = "https://eydbbvnhcjjutvssgwqc.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5ZGJidm5oY2pqdXR2c3Nnd3FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwMzQ3NzAsImV4cCI6MjEwNjYxMDc3MH0.MQZwx3RtQN9lBdZfymTvq7U63nffUnD2MBiYQuqcYF8";

// יצירת צינור התקשורת עם ה-DB
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
