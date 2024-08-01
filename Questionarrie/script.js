document.addEventListener('DOMContentLoaded', () => {
    const sliderThumb = document.querySelector('.slider-thumb');
    const ratings = document.querySelectorAll('input[name="rating"]');
    const accessibilityMenu = document.getElementById('accessibility-menu');
    const accessibilityBtn = document.querySelector('.accessibility-btn');

    ratings.forEach(rating => {
        rating.addEventListener('change', () => {
            const value = rating.value;
            sliderThumb.style.left = `${(value - 1) * 24}%`;
        });
    });

    accessibilityBtn.addEventListener('click', () => {
        accessibilityMenu.style.display = accessibilityMenu.style.display === 'block' ? 'none' : 'block';
    });

    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const increaseContrastBtn = document.getElementById('increase-contrast');
    const decreaseContrastBtn = document.getElementById('decrease-contrast');
    const toggleGrayscaleBtn = document.getElementById('toggle-grayscale');
    const translateGaBtn = document.getElementById('translate-ga');
    const translateEsBtn = document.getElementById('translate-es');

    increaseFontBtn.addEventListener('click', () => {
        adjustFontSize(2);
    });

    decreaseFontBtn.addEventListener('click', () => {
        adjustFontSize(-2);
    });

    increaseContrastBtn.addEventListener('click', () => {
        document.body.classList.add('high-contrast');
    });

    decreaseContrastBtn.addEventListener('click', () => {
        document.body.classList.remove('high-contrast');
    });

    toggleGrayscaleBtn.addEventListener('click', () => {
        document.body.classList.toggle('grayscale');
    });

    translateGaBtn.addEventListener('click', () => {
        translateContent('ga');
    });

    translateEsBtn.addEventListener('click', () => {
        translateContent('es');
    });

    function translateContent(lang) {
        const translations = {
            'ga': {
                'In general, how would you rate your health today?': 'Go ginearálta, conas a dhéanfá do shláinte inniu a mheas?',
                'Excellent': 'Sármhaith',
                'Good': 'Maith',
                'Fair': 'Cothrom',
                'Poor': 'Lag',
                'Bad': 'Dona'
            },
            'es': {
                'In general, how would you rate your health today?': 'En general, ¿cómo calificaría su salud hoy?',
                'Excellent': 'Excelente',
                'Good': 'Bueno',
                'Fair': 'Regular',
                'Poor': 'Pobre',
                'Bad': 'Malo'
            }
        };

        document.querySelector('.question').textContent = translations[lang]['In general, how would you rate your health today?'];
        document.querySelectorAll('.slider-labels span').forEach((label, index) => {
            const keys = ['Excellent', 'Good', 'Fair', 'Poor', 'Bad'];
            label.textContent = translations[lang][keys[index]];
        });
    }

    function adjustFontSize(delta) {
        const elements = document.querySelectorAll('*');
        elements.forEach(element => {
            const computedStyle = window.getComputedStyle(element);
            const fontSize = parseFloat(computedStyle.fontSize);
            if (!isNaN(fontSize)) {
                element.style.fontSize = (fontSize + delta) + 'px';
            }
        });
    }
});
