//const axios = require('axios')
const URLBASE = "http://localhost:3000"

function postRule() {
    const rule_url = URLBASE + "/rules"
    axios({method: 'post',
          url: rule_url,
          data: {
            "rule2": "jdbfjdsbfasjlbfjads",
            "added_by": "fjbjdsbfsjd"
          }})
        .then(data=>console.log(data))
        .catch(err=>console.error(err))
  }
  
document.querySelector('#AddRule').addEventListener('click', () => {
  postRule()
})