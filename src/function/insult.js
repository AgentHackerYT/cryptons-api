const fetch = require('node-fetch')
async function insult(res){
    fetch('https://cryptons.ga/api/v1/insult').then(r => r.json()).then(d=>{
        res(d.output)
    })
}
module.exports = insult
