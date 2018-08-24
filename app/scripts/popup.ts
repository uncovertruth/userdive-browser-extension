import {
  BROWSER as browser,
  GLOBAL as global
} from './consts'

browser.tabs.query(
  { active: true, currentWindow: true },
  (tabs) => {
    browser.tabs.sendMessage(
      tabs[0].id,
      { content: 'hello, i\'m popup' },
      (response) => {
        const tag = global.document.getElementsByTagName('h1')[0]
        tag.innerHTML = response.popup
      }
    )
  }
)
