async function nameservers(domain,res){
    if(!domain || typeof domain == "undefined") throw new Error("domain not found")
    fetch('https://cryptons.ga/api/v1/nameservers?domain' + domain).then(r => r.json()).then(d=>{
        res(d.output)
    })
}
module.exports = nameservers