import { trackingScript } from "./smartlookScript.js"

const smartInput = document.querySelector('#smart-id-input')
const injectButton = document.querySelector('#inject-button')

injectButton.addEventListener('click', () => {
    const smartlookId = smartInput.value
    smartInput.value = ''
    let script = document.createElement('script')
    let text = trackingScript(smartlookId)
    script.text = text
    try {
      document.getElementsByTagName('head')[0].appendChild(script)
      alert('Script successfully injected')
    } catch (_e) {
      alert('Something went wrong')
    }
})