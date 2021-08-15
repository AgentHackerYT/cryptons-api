const { default: fetch } = require("node-fetch");

async function script(res){
fetch('https://cryptons.ga/api/v1/script').then(r => r.json()).then(d =>{
res(d.script)
})
}
module.exports = script