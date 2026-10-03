# WebSiteMaker

אתר סטטי ללוח הודעות ציבורי: מבקרים יכולים לשלוח הודעות ולצפות בשלוש האחרונות.

## הגדרת Supabase

1. ב-Supabase פתחו את הגדרות הפרויקט וודאו שה-Project URL ומפתח ה-`anon`/publishable שבקובץ `supabaseClient.js` תואמים לפרויקט.
2. אם הם אינם תואמים, עדכנו אותם. אין להשתמש במפתח `service_role` בדפדפן.
3. ודאו שקיימת הטבלה `public.items` עם העמודות `id`, `title` ו-`created_at`.
4. הפעילו Row Level Security והגדירו את הרשאות המבקרים כך:

```sql
alter table public.items enable row level security;

drop policy if exists "Public can read messages" on public.items;
create policy "Public can read messages"
on public.items for select to anon
using (true);

drop policy if exists "Public can submit messages" on public.items;
create policy "Public can submit messages"
on public.items for insert to anon
with check (char_length(btrim(title)) between 1 and 500);

grant select, insert on table public.items to anon;
revoke update, delete on table public.items from anon, authenticated, public;
```

לפני הפתיחה לציבור, בדקו במסך Policies של הטבלה והסירו מדיניות קודמת שמאפשרת ל-`anon` או ל-`public` לעדכן או למחוק הודעות, או לעקוף את ההגבלות האלה. הודעות שנשלחות גלויות לכל מבקר באתר.

## פרסום ב-GitHub Pages

ה-workflow שב-`.github/workflows/pages.yml` מפרסם את הקבצים הסטטיים בכל push לענף `main`.

1. ב-GitHub פתחו **Settings → Pages** ובחרו **GitHub Actions** כמקור הפרסום.
2. ודאו שהגדרות ה-Supabase עודכנו, ושמדיניות ה-RLS נבדקה.
3. דחפו את השינויים לענף `main`. כתובת האתר תופיע תחת **Settings → Pages** ובתוצאת ה-workflow.

האתר וההודעות שבו יהיו זמינים לציבור. הכתובת והמפתח הציבורי של Supabase יופיעו בקוד הדפדפן; אבטחת הנתונים נשענת על מדיניות RLS, ולא על הסתרת המפתח.
