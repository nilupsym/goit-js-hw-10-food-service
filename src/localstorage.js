const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme';

const refs = {
    body: document.querySelector('body'),
    checkbox: document.querySelector('#theme-switch-toggle'),
}

setTheme();

refs.checkbox.addEventListener('change', onThemeSwitch);

function onThemeSwitch() {
    if (refs.body.className === '') {
        document.body.classList.add(Theme.DARK);
        localStorage.setItem(STORAGE_KEY, Theme.DARK);
    }
    else {
        document.body.classList.toggle(Theme.DARK);
        document.body.classList.toggle(Theme.LIGHT);
        localStorage.setItem(STORAGE_KEY, refs.body.className);
    }
}

function setTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
        refs.body.className = savedTheme;
    }
    else {
        refs.body.className = Theme.LIGHT;
    }

    if (savedTheme === Theme.DARK) {
        refs.checkbox.checked = true;
    }
}
