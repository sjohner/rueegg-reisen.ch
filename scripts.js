document.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language || navigator.userLanguage;
    const languageSelector = document.getElementById('language-selector');
    if (userLang.startsWith('de')) {
        languageSelector.value = 'de';
        changeLanguage();
    } else {
        languageSelector.value = 'en';
    }
});

function changeLanguage() {
    const selectedLang = document.getElementById('language-selector').value;
    document.querySelectorAll('[data-lang]').forEach(element => {
        if (element.getAttribute('data-lang') === selectedLang) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
}
