const capi = require('./index.js')
const client = new capi.client({
    token:'P4xbOsREem'
})
const keyUtils = new capi.keyUtils({
    token:'P4xbOsREem'
})
console.log(keyUtils.key)
client.tokencheck(res=>{
    console.log(res)
})
let msg = 'msg'
const LogoGame = new capi.LogoGame({
    message: msg,
    token: 'P4xbOsREem'
})
capi.insult(res=>{
    console.log(res)
})
//const fetch = require('node-fetch')
let fetchURL = 'http://cryptons.ga//api/v1/clyde?text=hi';
  /*let image = map((picName) => {
    return picName
  })*/
  const fetch = require('node-fetch')
Promise <fetch>('http://cryptons.ga//api/v1/insult').then(r =>r.json).then(d => {
    console.log(d)
})