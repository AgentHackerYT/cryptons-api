const { tokencheck } = require('../util')
class LogoGame {
    /**
     * @name LogoGame
     * @kind constructor
     * @param {Object} options options
     * @param {any} [options.message] message
     * @param {any} [options.key] key
     * @param {any} [options.winMessage] win message
     */
    constructor(options) {
        if(!options.key) throw new TypeError('Missing argument: key')
        if(typeof options.key !== 'string') throw new TypeError('key must be in a string')
      
        if(!options.message) throw new TypeError('Missing argument: message')
    
        this.message = options.message;
        this.key = options.key;
      
    }
    async start() {
        tokencheck(this.key, (res)=>{
            if(res == "no") throw new Error('Invalid Key')
        })
        const fetch = require("node-fetch")
        const Discord = require('discord.js');
        fetch(`https://cryptons.ga/api/v1/logo_game`)
        .then(res => res.json())
        .then(data => {
          
    const pok = new Discord.MessageEmbed()
    .setTitle(`What's that Logo?`)
    .setImage(data.logo)
    .setFooter(`You have Unlimited Chances! Type stop to stop the game`)

    const right = new Discord.MessageEmbed()
    .setTitle(`You Guessed It Right!`)
    .setAuthor(this.message.author.tag)
    .setDescription(`It was ${data.answer.shift()}`)
    .setImage(data.logo)
   

    const wrong = new Discord.MessageEmbed()
    .setTitle(`You Lost`)
    .setAuthor(this.message.author.tag)
    .setDescription(`It was ${data.answer.shift()}`)
    .setImage(data.logo)
    

    this.message.channel.send({embed: pok})
    const gameFilter = m => m.author.id
    const gameCollector = this.message.channel.createMessageCollector(gameFilter);

   gameCollector.on('collect', async msg => {
      if(msg.author.bot) return
          const selection = msg.content.toLowerCase();
if (selection.includes(ans)) {
this.message.reply({embed: right})
gameCollector.stop()
          }else if (selection === "stop") {
            this.message.channel.send({embed: wrong})
            gameCollector.stop();
          } else if (!selection.includes(ans)) {
            this.message.channel.send(`Wrong Guess Try Again! - Type stop to cancel the Game`).then(msg => {
                msg.delete({ timeout: 20000 /*time unitl delete in milliseconds*/});
            })
          }
    })
    
})
}
}

module.exports = LogoGame;
