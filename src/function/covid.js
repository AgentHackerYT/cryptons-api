const fetch = require('node-fetch')
var baseurl = "https://cryptons.ga"
async function covid(country ,cases , recov , death , dischargerate , deathrate , closed , flaglink ){
    if(typeof country == 'undefined') throw new Error('country not found')
    fetch(baseurl + '/api/v1/covid?country=' + country).then(r => r.json()).then(d =>{
        if(typeof cases == "undefined" && d.error == "invalid country") throw new Error('country not found')
        cases(d.totalcases)
        recov(d.recov)
        death(d.death)
        dischargerate(d.dischargerate)
        deathrate(d.deathrate)
        closed(d.closedCases)
        flaglink(d.flagimg)
    })
}
module.exports= {
    covid
}