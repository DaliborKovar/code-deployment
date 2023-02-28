import { trackingScript } from "./smartlookScript.js"

const smartInput = document.querySelector('#smart-id-input')
const injectButton = document.querySelector('#inject-button')
const triggerWriter = document.querySelector('#trigger-button')
const pepe = document.querySelector('#pepe')

injectButton.addEventListener('click', () => {
    const smartlookId = smartInput.value
    smartInput.value = ''
    let script = document.createElement('script')
    let text = trackingScript(smartlookId)
    script.text = text

    try {
      console.log(script)
      document.getElementsByTagName('head')[0].appendChild(script)
      console.log('Script successfully injected')
    } catch (_e) {
      // no op
    }
})

triggerWriter.addEventListener('click', () => {
  pepe.classList.add('visible')
})




