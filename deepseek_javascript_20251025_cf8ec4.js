// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Находим кнопку на главной странице
    const ctaButton = document.getElementById('ctaButton');
    
    // Если кнопка существует (т.е. мы на главной странице), добавляем обработчик
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Спасибо за интерес! Эта функция в разработке. Свяжитесь со мной по email: your.email@example.com');
        });
    }
    
    // Простой лог для демонстрации работы JS
    console.log('Сайт успешно загружен!');
});