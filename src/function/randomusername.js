const fetch  = require('node-fetch')
async function randomusername(res){
fetch('https://cryptons.ga/api/v1/randomusername').then(r => r.json()).then(d =>{
    res(d.output)
})
}
module.exports = randomusername