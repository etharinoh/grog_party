const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
const express = require('express')
const api = express()
const redis = require('redis');

const redis_client = redis.createClient({
  socket: {
    host: '172.17.0.1',
    port: '6379'
  },

});

REDIS_DB = {
  USERS: 1, //who is playing
  RULES: 2, //a rule which will last for x ammount of time
  DICE: 3, //"heres a silly thing do it now"
}
//redis_client.select(REDIS_DB.)
redis_client.on("connect", () => { console.log("connected redis") })
redis_client.on('error', err => console.log('Redis Server Error', err));
redis_client.connect();


const api_port = 3000
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: false }))

api.get('/rules', (req, res) => {
  res.send('Hello World!')
})
api.post('/rules', (req, res) => {
  let b = req.body
  // validation required here
  let { valid, reason } = validateRule(b)
  console.log(valid + "\t" + reason)
  if (valid) {
    b["id"] = uuidv4()
    try {
      console.log("hello")
      redis_client.hSet(b["id"], [...Object.entries({ "rule": b["rule"], "added_by": b["added_by"] }).flat()])
    } catch (err) {
      res.send("error")
    }
    res.send('posted to rules: ' + JSON.stringify(req.body))
  } else {
    res.status(400)
    res.send("Invalid json provided " + reason)
  }

})
api.get('/users', (req, res) => {
  res.send('Hello World!')
})
api.post('/users', (req, res) => {
  let b = req.body
  // validation required here
  let { valid, reason } = validateUser(b)
  console.log(valid + "\t" + reason)
  if (valid) {
    b["id"] = uuidv4()
    try {
      redis_client.hSet(b["id"], [...Object.entries({ "rule": b["rule"], "added_by": b["added_by"] }).flat()])
    } catch (err) {
      res.send("error")
    }
    res.send('posted to users: ' + JSON.stringify(req.body))
  } else {
    res.status(400)
    res.send("Invalid json provided " + reason)
  }

})

let validateRule = (data) => {
  let valid = true
  let reason = ""
  if (data["rule"] == undefined) {
    valid = false
    reason += "\"rule\" field not provied"
  }
  if (data["added_by"] == undefined) {
    valid = false
    reason += "\"added_by\" field not provied"
  }
  // add more validation in if required
  console.log(valid + "\t" + reason)
  return { valid, reason }

}

api.listen(api_port, () => {
  console.log(`Groggy_rock api listening on port ${api_port}`)
})