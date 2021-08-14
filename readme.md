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

# What is this package?

- A fun npm package to use Cryptons API and many more utilities!

## Features
- 🧑 Beginner friendly
- 🎉 Easy to use
- ✨ Simple
- 🔘 Updates Frquently!

## Installation <img src = "https://cdn.discordapp.com/emojis/763159009686585354.gif?v=1" alt="download" width=40>

**From NPM:**
```bash
[sudo] npm install cryptons-api
```

**From source:**
```bash
git clone git://github.com/AgentHackerYT/cryptons-api.git
cd ./cryptons-api
npm install
```

## Configuration

You will need your Cryptons API key to use `cryptons-api`.

Keys can be found at: https://discord.gg/vUYvswzwMH

```js
const api = require('cryptons-api')
const crypton = new api.client('key here')
```

# Usage <img src = "https://cdn.discordapp.com/emojis/837910195450937384.png?v=1" alt = "hmmm" width=40>
```js

//-------------------------------------Key Check-----------------------------------------\\
crypton.tokencheck(res =>{console.log(res)})
//-------------------------------------API Stats-----------------------------------------\\
crypton.stats((node , platform , cpu , arch , memuse)=>{console.log(`node: ${node}, platform: ${platform} , arch: ${arch} , memuse: ${memuse}`)})
//-------------------------------------Random Meme-----------------------------------------\\
crypton.meme((img , title , upvote , downvote , comments , url)=>{
    console.log(`image: ${img} , title: ${title} , upvotes: ${upvotes} , downvotes: ${downvotes} , comments: ${comments} , url: ${url}`)
})
//---------------------------------Discord User INFO-----------------------------------------\\
crypton.discorduser(discord_id , (username , avatar , disriminator , banner , banner_color , accent_color)=>{console.log(all things)})
//-------------------------------------Random Insult-----------------------------------------\\
crypton.insult(insult =>{console.log(insult)})
//--------------------------Get NameServers of a domain-----------------------------------------\\
crypton.nameservers(domain , result=>{console.log(result)})
//---------------------------------Get Banner of user-----------------------------------------\\
crypton.userbanner(discord_id , res=>{console.log(res)})
//-------------------------------------World Covid Stats-----------------------------------------\\
crypton.covidworld((cases , deaths, recovered , active, closedcases,mildcases, criticalcases)=>{console.log(cases + deaths + recovered + active + closedcases + mildcases + criticalcases)})
//-------------------------------------Country Covid Stats-----------------------------------------\\
crypton.covid((country ,cases , recov , death , dischargerate , deathrate , closed , flaglink) => {console.log(country + cases + recov + death + dischargerate + deathrate + closed + flaglink)})

```
# Credits
Agent Hacker#0477 and Tejas Lamba#1924

