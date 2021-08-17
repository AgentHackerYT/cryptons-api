# Cryptons API
[![npm version](https://badge.fury.io/js/cryptons-api.svg)](https://www.npmjs.com/package/cryptons-api)
[![Build Status](https://travis-ci.org/AgentHackerYT/cryptons-api.svg?branch=main)](https://travis-ci.org/AgentHackerYT/cryptons-api)
[![Dependency Status](https://david-dm.org/AgentHackerYT/cryptons-api.svg)](https://david-dm.org/AgentHackerYT/cryptons-api)

<div align="center">
  <p>
    <a href="https://nodei.co/npm/cryptons-api
/"><img src="https://nodei.co/npm/cryptons-api.png?downloads=true&stars=true" alt="NPM Info" /></a>
  </p>
</div>

<div align="center">
 <p>
 For errors and questions you can join <a href="https://discord.gg/vUYvswzwMH">our support server</a></p>
</div>

- [Cryptons API](https://cryptons.ga/) Node.JS Client
- More Functions Will be added soon

# What is this package? <img src = "https://cdn.discordapp.com/emojis/854915298724282379.gif?v=1" alt="what" width=40>

- A fun npm package to use Cryptons API and many more utilities!

## Features <img src = "https://cdn.discordapp.com/emojis/815135700063879219.gif?v=1" alt="install" width=40>
- 🧑 Beginner friendly
- 🎉 Easy to use
- ✨ Simple
- 🔘 Updates Frquently!

## Installation <img src = "https://cdn.discordapp.com/emojis/852546107279147028.gif?v=1" alt="install" width=40>

**From NPM:**
```sh
npm install cryptons-api
```

## Configuration <img src = "https://cdn.discordapp.com/emojis/830498299584446494.gif?v=1" alt="config" width=40>

You will need your Cryptons API key to use `cryptons-api`.

Keys can be found at: https://discord.gg/vUYvswzwMH

# Usage <img src = "https://cdn.discordapp.com/emojis/837910195450937384.png?v=1" alt = "hmmm" width=40>
- Covid Command (For Discord)
```js
const { Covid } = require('cryptons-api')
//world
new Covid({
    message: message,
    country: 'world',
    title: title,
    description: 'Covid Cases',
    color: 'RANDOM',
    footer: 'Made By Cryptons API NPM',
    addFieldOption : true || false
})
// covid
new Covid({
    message: message,
    country: 'india',
    title: title,
    description: 'Covid Cases',
    color: 'RANDOM',
    footer: 'Made By Cryptons API NPM',
    addFieldOption : true || false
})
```
- IMDB For Discord.js
```js
const { IMDB } = require('cryptons-api')
new IMDB({
    message: message,
    key: 'IMDB_KEY',
    movie: 'Movie Name'
})
```
- Token Utils
```js
const { keyUtils } = require('cryptons-api')
const keyutil = new keyUtils({
    token: 'Cryptons api key'
})
// returns your cryptons api token
keyutil.getKey()

// checks your token
let check = keyutil.checkKey()
console.log(check)
```
- Logo Game for Discord.js
```js
const { LogoGame } = require('cryptons-api')
new LogoGame({
    token: 'Cryptons-Token',
    message: message
})
```
- Insult
```js
const { insult } = require('cryptons-api')
insult(r =>{
    console.log(r)
})
```
- Random Username generator
```js
const { randomusername } = require('cryptons-api')
randomusername(r =>{
    console.log(r)
})
```
- Script
```js
const { script }  = require('cryptons-api')
script(r =>{
    console.log(r)
})
```
- nameserver
```js
const { namserver } = require('cryptons-api')
nameserver('https://cryptons.ga' , r =>{
    console.log(r)
})
```
- Minesweeper For Discord.js
```js
const { MS } = require('cryptons-api')
const ms = new MS({
    size: 20,
    bomb: 10
})
ms.output()
```
- Covid and Covid World 
```js
// Covid For a country
const { covid } = require('cryptons-api')
covid((country ,cases , recov , death , dischargerate , deathrate , closed , flaglink) =>{ 
    console.log(country  + cases + recov +  death + dischargerate + deathrate + closed + flaglink )
})
//Covid World
const { covidWorld } = require('cryptons-api')
covidWorld((cases , deaths, recov , active, close,mild, critical)=>{
    console.log(cases + deaths + recov +  active + close + mild + critical)
})
```
- Discord User Info
```js
const { discorduser } = require('cryptons-api')
discorduser(discord_id , (username , avatar , disriminator , banner , banner_color , accent_color)=>{
    console.log(username + avatar + disriminator + banner + banner_color + accent_color)
    })
```
- Stats
```js
const { stats } = require('cryptons-api')
stats((node, platform , cpu , arch , memuse) =>{
    console.log(node + platform + cpu + arch + memuse)
})
```
- Random Programing language name
```js
const { script } = require('cryptons-api')
script(r =>{
    console.log(r)
})
```
- Meme
```js
const { meme } = require('cryptons-api')
meme((img , title , upvote , downvote , comments , url)=>{
    console.log(`image: ${img} , title: ${title} , upvotes: ${upvotes} , downvotes: ${downvotes} , comments: ${comments} , url: ${url}`)
})
```
- Clyde
```js
const { clyde } = require('cryptons-api')
const a = new clyde({
    text: something_here
})
message.channel.send(a)
```
- Same Usage as Clyde
`Captcha`
`cti`
`mocktext`
`pablo`
`pabloeveryone`
- Two Buttons
```js
const { twobuttons } = require('cryptons-api')
const a = new twobuttons({
    btn1: something_here,
    btn2: something_here_as_well,
})
```
## Developers 👨‍💻
- **[Tejas Lamba#1924](https://github.com/TajuModding)**
- **[Agent Hacker#0477](https://github.com/AgentHackerYT)**
# Old Client
- It will be not updated
```js
const api = require('cryptons-api')
const crypton = new api.client({
    token:'key here (optional)'
    })
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

