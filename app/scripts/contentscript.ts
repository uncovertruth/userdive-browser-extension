import { browsers } from '../consts'

browsers.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    console.log(request.content)
  }
)
