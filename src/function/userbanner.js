const { default: fetch } = require("node-fetch");
async function userbanner(id , output){
    if(typeof id === "undefined") throw new Error("ID Must a be a number")
    fetch(`https://cryptons.ga/api/v1/userbanner?id=${id}`).then(res => res.json()).then(d =>{
    output(d.url)
    })
}
module.exports = userbanner