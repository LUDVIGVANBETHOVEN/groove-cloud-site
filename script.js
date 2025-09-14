// Переключение темы
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

// Подробнее/Скрыть описание
document.querySelectorAll('.toggleDesc').forEach(btn => {
  btn.addEventListener('click', () => {
    const more = btn.previousElementSibling.querySelector('.more');
    if (more.style.display === 'inline') {
      more.style.display = 'none';
      btn.textContent = 'Подробнее';
    } else {
      more.style.display = 'inline';
      btn.textContent = 'Скрыть';
    }
  });
});

// Модальное окно 18+
const modal = document.getElementById('ageModal');
const agreeBtn = document.getElementById('agreeBtn');
if (modal && agreeBtn) {
  agreeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    localStorage.setItem('ageConfirmed', 'true');
  });
  if (localStorage.getItem('ageConfirmed') === 'true') {
    modal.style.display = 'none';
  }
}
