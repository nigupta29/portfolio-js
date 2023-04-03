'use strict'

const themeBtn = document.querySelector('.themeBtn')
const pageHTML = document.querySelector('html')

themeBtn.addEventListener('click', () => {
  const isLightTheme = pageHTML.dataset.theme === 'light'
  themeBtn.textContent = isLightTheme ? '🌙' : '☀️'
  pageHTML.dataset.theme = isLightTheme ? 'dark' : 'light'
})
