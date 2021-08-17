const fetch = require('node-fetch');
const {makeImage} = require('../util')
const {MessageAttachment} = require('discord.js')
class clyde {
   constructor(options){
const input = options.text
if(typeof input == "undefined") throw new Error('No Text Found')
const final = `https://cryptons.ga/api/v1/clyde?text=${input}`
return final
        }
}
module.exports = clyde