const recentItemsList = document.getElementById('recent-items-list');

async function loadRecentItems() {
  const { data, error } = await supabaseClient
    .from('items')
    .select('title')
    .order('created_at', { ascending: false })
    .limit(3);

  if (error) {
    console.error('שגיאה בשליפת ההודעות האחרונות:', error);
    recentItemsList.innerHTML = '<li class="error">שגיאה בטעינת ההודעות</li>';
    return;
  }

  recentItemsList.replaceChildren();

  if (data.length === 0) {
    recentItemsList.innerHTML = '<li>עדיין לא נשלחו הודעות.</li>';
    return;
  }

  data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.title;
    recentItemsList.appendChild(li);
  });
}

loadRecentItems();
