const fetch = require('node-fetch');
var baseurl = "https://cryptons.ga"
async function stats(node, platform , cpu , arch , memuse){
    fetch(baseurl + '/api/v1/stats').then(r => r.json()).then(d=>{
        node(d.node)
        platform(d.platform)
        cpu(d.cpu)
        arch(d.arch)
        memuse(d.memuse)
    })
}