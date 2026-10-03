// =================================================================
// הגדרת חיבור לבסיס הנתונים בענן (Supabase)
// =================================================================

// הדבק כאן את הפרטים מתוך ה-Dashboard של Supabase
const SUPABASE_URL = 'https://ekmpbajjjocurvsxwtye.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrbXBiYWpqam9jdXJ2c3h3dHllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwMjc4MTMsImV4cCI6MjEwNjYwMzgxM30.6E9kk5Ja_neIJFeVWabr953b8F7rFhbn60qe6G2gbZ4';

// יצירת צינור התקשורת עם ה-DB
const supabase = supabaseClient.createClient(SUPABASE_URL, SUPABASE_KEY);
