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
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))    } 
      
      catch {
      // no op
    }
    try {
      document.getElementsByTagName('head')[0].appendChild(script)
      console.alert('Script successfully injected')
    } catch (_e) {
      alert('Something went wrong')
    }
})

triggerWriter.addEventListener('click', () => {
  pepe.classList.add('visible')
})




