import * as css from './style.css'
import { toggleTheme } from './themeToggle';

const themeButton = document.querySelector('#theme-toggle>button')

themeButton.addEventListener('click', toggleTheme)