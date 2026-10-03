// =================================================================
// צד הלקוח (Client Side) - לוגיקה ותקשורת
// =================================================================

const dataForm = document.getElementById('data-form');
const itemInput = document.getElementById('item-input');
const itemsList = document.getElementById('items-list');

// 1. פונקציה לקריאת נתונים מבסיס הנתונים (Read)
async function loadData() {
  // פנייה לטבלת 'items' ב-Supabase
  const { data, error } = await supabaseClient
    .from('items')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('שגיאה בשליפת הנתונים:', error);
    itemsList.innerHTML = '<li class="error">שגיאה בחיבור לבסיס הנתונים</li>';
    return;
  }

  // ריקון הרשימה ובנייתה מחדש
  itemsList.innerHTML = '';

  if (data.length === 0) {
    itemsList.innerHTML = '<li>אין עדיין נתונים בטבלה.</li>';
    return;
  }

  // הצגת הנתונים שהתקבלו מתוך ה-DB
  data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.title;
    itemsList.appendChild(li);
  });
}

// 2. פונקציה לשמירת נתון חדש בבסיס הנתונים (Create)
dataForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // מניעת טעינה מחדש של הדף

  const textValue = itemInput.value.trim();
  if (!textValue) return;

  // שליחת הנתון ל-Supabase
  const { error } = await supabaseClient
    .from('items')
    .insert([{ title: textValue }]);

  if (error) {
    alert('שגיאה בשמירה: ' + error.message);
  } else {
    itemInput.value = ''; // איפוס השדה
    loadData(); // טעינה מחדש של הרשימה
  }
});

// הרצת טעינה ראשונית בטעינת העמוד
loadData();
