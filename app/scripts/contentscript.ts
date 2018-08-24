import { BROWSER as browser } from './consts'

browser.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    sendResponse({ popup: 'success!' })
  }
)
