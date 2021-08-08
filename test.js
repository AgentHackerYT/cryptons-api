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
