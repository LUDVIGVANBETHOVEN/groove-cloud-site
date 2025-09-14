// Функция для переключения текста (короткое ↔ полное описание)
function toggleDesc(button) {
  let desc = button.previousElementSibling;
  if (desc.classList.contains("short")) {
    desc.textContent = desc.getAttribute("data-full");
    desc.classList.remove("short");
    button.textContent = "Скрыть";
  } else {
    desc.textContent = desc.getAttribute("data-short");
    desc.classList.add("short");
    button.textContent = "Подробнее";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let descriptions = document.querySelectorAll(".desc");
  descriptions.forEach(desc => {
    desc.textContent = desc.getAttribute("data-short");
    desc.classList.add("short");
  });
});