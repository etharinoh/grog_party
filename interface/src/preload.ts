// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const axios = require("axios")
console.log('👋 This message is being logged by "renderer.js", included via webpack');

const URLBASE = "http://localhost:3001"

function postRule() {
    const rule_url = URLBASE + "/rules"
    let req = axios({method: 'post',
            url: rule_url,
            data: {
                "rule": "jdbfjdsbfasjlbfjads",
                "added_by": "fjbjdsbfsjd"
            },
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
        .then((data:Response)=>console.log(data))
        .catch((err:Response)=>console.error(err))
  }

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#AddRule').addEventListener('click', () => {
        postRule()
      })      
});
