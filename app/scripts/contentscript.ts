import * as browsers from 'webextension-polyfill'

// popup とメッセージング
browsers.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    console.log('message: ', request.content)
    sendResponse({ popup: 'hi'})
  }
)
