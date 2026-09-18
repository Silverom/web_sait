// Ждём полной загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    
    // Находим кнопку бургер-меню и блок навигации
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    // Если оба элемента найдены — добавляем обработчик клика
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            // Переключаем класс is-active (показывает/скрывает меню)
            mainNav.classList.toggle('is-active');
        });
    }
    
});