# Cryptons API
- A Simple Module For [The Cryptons API](https://cryptons.ga/)
- More Functions Will be added soon
# How to use
```js
const api = require('cryptons-api')
const crypton = new api.client('key here (optional)')
////////////////////////////////
crypton.tokencheck(res =>{console.log(res)})
////////////////////////////////
crypton.stats((node , platform , cpu , arch , memuse)=>{console.log(`node: ${node}, platform: ${platform} , arch: ${arch} , memuse: ${memuse}`)})
////////////////////////////////
crypton.meme((img , title , upvote , downvote , comments , url)=>{
    console.log(`image: ${img} , title: ${title} , upvotes: ${upvotes} , downvotes: ${downvotes} , comments: ${comments} , url: ${url}`)
})
////////////////////////////////
crypton.discorduser(discord_id , (username , avatar , disriminator , banner , banner_color , accent_color)=>{console.log(all things)})
////////////////////////////////
crypton.insult(insult =>{console.log(insult)})
////////////////////////////////
crypton.nameservers(domain , result=>{console.log(result)})
////////////////////////////////
crypton.userbanner(discord_id , res=>{console.log(res)})
////////////////////////////////
crypton.covidworld((cases , deaths, recovered , active, closedcases,mildcases, criticalcases)=>{console.log(cases + deaths + recovered + active + closedcases + mildcases + criticalcases)})
////////////////////////////////
crypton.covid((country ,cases , recov , death , dischargerate , deathrate , closed , flaglink) => {console.log(country + cases + recov + death + dischargerate + deathrate + closed + flaglink)})

```
# Credits
- API made By Agent Hacker#0477 and Tejas Lamba#1924
- Module Made By Agent Hacker#0477