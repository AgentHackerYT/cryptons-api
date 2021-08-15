const fetch = require('node-fetch');
const {makeImage} = require('../util')
const {MessageAttachment} = require('discord.js')
class clyde {
   constructor(options){
const input = options.text
if(typeof input == "undefined") throw new Error('No Text Found')
const a = `https://cryptons.ga/api/v1/clyde?text=${input}`
const final = new MessageAttachment(a , 'clyde.png')
return final
        }
}
module.exports = clyde