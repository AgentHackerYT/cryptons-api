/**
 * Coming Soon
 */
const but = require('discord-buttons')
"use strict";
class ButtonPage  {
    constructor(options){
           if(!options.message) throw new TypeError('Missing argument: message')
            if(!options.pages) throw new TypeError('Missing argument: pages')
        this.message = options.message
        this.pages = options.pages
        this.emoji1 = options.emoji1 || '⬅️'
        this.emoji2 = options.emoji2 || '➡️'
        this.timeout = options.timeout || '20000'
        this.color = options.color || 'blurple'
        this.client = options.client
        if(!options.client) throw new TypeError('Missing argument: client')
        require('discord-buttons')(this.client)
                }
                async init(){
                    let page = 0
                    let pages = this.pages
                    let message = this.message
                    const button1 = new but.MessageButton().setEmoji(this.emoji1).setID('btn1').setStyle(this.color)
                    const button2 = new but.MessageButton().setEmoji(this.emoji2).setID('btn2').setStyle(this.color)
                    const row = new but.MessageActionRow().addComponents(button1, button2)
                    const btn1after = new but.MessageButton().setEmoji(this.emoji1).setID('btn1after').setStyle(this.color).setDisabled()
                    const btn2after = new but.MessageButton().setEmoji(this.emoji2).setID('btn2after').setStyle(this.color).setDisabled()
                    const deadRow = new but.MessageActionRow().addComponents(btn1after , btn2after)
                    const curPage = await message.channel.send({embed: page[0] , components: row})
                    const filter =  (b) => ['b1n1' , 'btn2'].includes(b.id)
                    const col = await curPage.createButtonCollector(filter , {time: this.timeout})
                    col.on('collect', async(button) =>{
                        button.reply.defer()
                        if(button.clicker.user.id !== message.author.id) return;
                        if(button.id == 'btn1'){
                            page = page > 0 ? --page : pages.length - 1
                        }else if(button.id == 'btn2'){
                            page = page + 1 < pages.length ? ++page : 0
                        }
                        curPage.edit({embed: pages[page], components: row})
                    })
                    col.on('end', ()=>{
                        if(!curPage.deleted){
                            curPage.edit({embed: pages[page] , components: deadRow})
                        }
                    })
                    return curPage
                }
}
module.exports = ButtonPage 
