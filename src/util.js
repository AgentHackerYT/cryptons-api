const fetch = require('node-fetch');
module.exports = {
    tokencheck:(key , res)=>{
        fetch('https://cryptons.ga/api/v1/keycheck?key=' + key).then(r => r.json()).then(d =>{
        if(d.output == "no") return res = "no"
        if(d.output == "yes") return res = "yes"
        })
    }
}