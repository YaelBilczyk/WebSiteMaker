// =================================================================
// צד הלקוח (Client Side) - לוגיקה ותקשורת
// =================================================================

const dataForm = document.getElementById('data-form');
const itemInput = document.getElementById('item-input');
const formStatus = document.getElementById('form-status');

dataForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const textValue = itemInput.value.trim();
  if (!textValue) {
    formStatus.textContent = 'יש להזין הודעה לפני השליחה.';
    return;
  }

  const submitButton = dataForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  formStatus.textContent = 'שולח...';

  try {
    const { error } = await supabaseClient
      .from('items')
      .insert([{ title: textValue }]);

    if (error) throw error;

    itemInput.value = '';
    formStatus.textContent = 'ההודעה נשלחה בהצלחה.';
  } catch (error) {
    console.error('שגיאה בשליחת ההודעה:', error);
    formStatus.textContent = 'לא ניתן לשלוח את ההודעה. נסו שוב מאוחר יותר.';
  } finally {
    submitButton.disabled = false;
  }
});
