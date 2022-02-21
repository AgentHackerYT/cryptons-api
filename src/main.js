const fetch = require('node-fetch');
var baseurl = "https://cryptons.ga"
var token;
/**
@deprecated use the new functions and classes instead
*/
class client {
    constructor(options){
        if(options.token !== null){
        token = options.token
        }
        if(typeof options.token !== 'string') throw new TypeError('Error: Token must be a string!')
        this.token = options.token
        this.tokencheck
        this.stats
        this.meme
        this.discorduser
        this.insult
        this.nameservers
        this.userbanner
        this.covid
        this.covidworld
        this.clyde
    }
    async covidworld(cases , deaths, recov , active, close,mild, critical){
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
    async covid(country ,cases , recov , death , dischargerate , deathrate , closed , flaglink ){
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
    async tokencheck(response){
        var output;
        fetch(baseurl + '/api/v1/keycheck?key=' + this.token).then(r => r.json()).then(res=>{
            response(res.output)
        }).catch(e =>{
            console.log(e)
        })
    }
    async stats(node, platform , cpu , arch , memuse){
        fetch(baseurl + '/api/v1/stats').then(r => r.json()).then(d=>{
            node(d.node)
            platform(d.platform)
            cpu(d.cpu)
            arch(d.arch)
            memuse(d.memuse)
        })
    }
    async meme(img ,title , up , down , com , url){
        fetch(baseurl + '/api/v1/meme').then(r => r.json()).then(d=>{
            img(d.image)
            title(d.tittle)
            up(d.upvotes)
            down(d.downvotes)
            com(d.comments)
            url(d.url)
        })
    }
    async discorduser(id ,un ,ava,dis,ban,bancol,accol){
        if(typeof id === 'undefined') throw new Error('ID not found')
        if(typeof id !== 'number') throw new Error('ID Must be a number')
        fetch(baseurl + '/api/v1/discorduser?id=' + id).then(r => r.json()).then(d=>{
            un(d.username)
            ava(d.avatar)
            dis(d.discriminator)
            ban(d.banner)
            bancol(d.banner_color)
            accol(d.accent_color)
        })
    }
    async insult(res){
        fetch(baseurl + '/api/v1/insult').then(r => r.json()).then(d=>{
            res(d.output)
        })

    }
    async clyde(text,res){
        if(typeof text == 'undefined') throw new Error('Text not found')
        const imageUrl = baseurl + '/api/v1/clyde?text=' + encodeURIComponent(text);

        fetch(imageUrl)
          //                         vvvv
          .then(response => response.blob())
          .then(imageBlob => {
              // Then create a local URL for that image and print it
              
        const imageObjectURL = URL.createObjectURL(imageBlob);
              res(imageObjectURL);
          });
    }
    async nameservers(domain , res){    
        if(!domain || typeof domain == "undefined") throw new Error("domain not found")
        fetch(baseurl + '/api/v1/nameservers?domain' + domain).then(r => r.json()).then(d=>{
            res(d.output)
        })
    }
    async userbanner(id , res){
        if(typeof id === 'undefined') throw new Error('ID not found')
        if(typeof id !== 'number') throw new Error('ID Must be a number')
        fetch(baseurl + '/api/v1/userbanner?id=' + id).then(r => r.json()).then(d =>{
            res(d.url)
        })
    }
    
}
module.exports = client
