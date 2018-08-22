import * as browsers from 'webextension-polyfill'

// content_script とメッセージング
browsers.tabs.query(
  { active: true, currentWindow: true },
  (tabs) => {
    browsers.tabs.sendMessage(
      tabs[0].id,
      { content: 'honya' },
      (res) => { console.log(res.popup) }
    )
  }
)
