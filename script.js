import { trackingScript } from "./smartlookScript.js"

const smartInput = document.querySelector('#smart-id-input')
const injectButton = document.querySelector('#inject-button')
const triggerWriter = document.querySelector('#inject-button')

injectButton.addEventListener('click', () => {
    const smartlookId = smartInput.value
    smartInput.value = ''
    let script = document.createElement('script')
    let text = trackingScript(smartlookId)
    script.text = text
    try {
      fetch('GET', 'http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/current_releases.json').then((res) => console.log(res))
    } catch {
      // no op
    }
    try {
      document.getElementsByTagName('head')[0].appendChild(script)
      console.alert('Script successfully injected')
    } catch (_e) {
      alert('Something went wrong')
    }
})




