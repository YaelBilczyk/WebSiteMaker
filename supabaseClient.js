// =================================================================
// הגדרת חיבור לבסיס הנתונים בענן (Supabase)
// =================================================================

// הדבק כאן את הפרטים מתוך ה-Dashboard של Supabase
const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_KEY = 'YOUR_ANON_PUBLIC_KEY';

// יצירת צינור התקשורת עם ה-DB
const supabase = supabaseClient.createClient(SUPABASE_URL, SUPABASE_KEY);
