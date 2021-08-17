const fetch = require('node-fetch')
var baseurl = "https://cryptons.ga"
async function covidWorld(cases , deaths, recov , active, close,mild, critical){
    fetch(baseurl + '/api/v1/covid').then(r => r.json()).then(d=>{
        cases(d.cases)
        deaths(d.deaths)
        recov(d.recovered)
        active(d.activecases)
        close(d.closedcases)
        mild(d.mildcases)
        critical(d.criticalcases)
    })
}
module.exports = covidWorld