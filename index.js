





document.addEventListener('DOMContentLoaded', function () {

    const options = document.querySelectorAll('.option');
    const slider = document.getElementById('slider');
    const accessibilityBtn = document.querySelector('.accessibility-btn');
    const accessibilityMenu = document.getElementById('accessibility-menu');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');

    options.forEach(option => {
        option.addEventListener('click', function () {
            options.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            slider.value = this.dataset.value;
        });
    });

    slider.addEventListener('input', function () {
        options.forEach(option => option.classList.remove('selected'));
        options[this.value - 1].classList.add('selected');
    });

    accessibilityBtn.addEventListener('click', () => {
        accessibilityMenu.style.display = accessibilityMenu.style.display === 'block' ? 'none' : 'block';
    });

    increaseFontBtn.addEventListener('click', () => {
        adjustFontSize(2);
    });

    decreaseFontBtn.addEventListener('click', () => {
        adjustFontSize(-2);
    });

});

function adjustFontSize(delta) {
    const elements = document.querySelectorAll('.text-content');
    elements.forEach(element => {
        const computedStyle = window.getComputedStyle(element);
        const fontSize = parseFloat(computedStyle.fontSize);
        if (!isNaN(fontSize)) {
            element.style.fontSize = (fontSize + delta) + 'px';
        }
    });
}

document.querySelectorAll('.option').forEach(image => {
    image.addEventListener('click', function() {
    this.classList.toggle('selected'); 
    });
});