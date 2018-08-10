declare var document: any
import { browsers } from '../consts'

browsers.tabs.query({
  active: true,
  currentWindow: true
  }, (tabs) => {
    browsers.tabs.sendMessage(tabs[0].id, {
      content: 'test'
  })
})
