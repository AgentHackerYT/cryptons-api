const fetch = require('node-fetch')
const Discord = require('discord.js')
class covid {
    constructor(options){
        var desc = options.description , title = options.title, color = options.color , footer = options.footer;
        let tf = options.addFieldOption || true
        if(typeof options.message == "undefined") throw new Error('message Missing')
        if(typeof options.country == 'undefined') throw new Error('Country Missing')
        if(typeof options.description == "undefined") desc = 'Covid Cases'
        if(typeof options.title == "undefined") title = 'Covid Cases'
        if(typeof options.color == "undefined") color = '#00000'
        if(typeof options.footer == "undefined") footer = 'Made Using cryptons-api in NPMJS.COM'
        const message = options.message
        if(options.country.toLowerCase() == "world"){
            fetch('https://cryptons.ga/api/v1/covid').then(r =>r.json()).then(d=>{
                const embed = new Discord.MessageEmbed()
                .setTitle(title)
                .setDescription(desc)
                .setColor(color)
                .setFooter(footer)
                .addField('Country',d.country, tf)
                .addField('Total Cases', d.cases , tf)
                .addField('Recovered', d.recovered , tf)
                .addField('Active cases', d.activecases)
                .addField('Mild Cases', d.mildcases , tf)
                .addField('Critical Cases', d.criticalases , tf)
                .addField('Closed Cases', d.closedCases , tf)
                .setColor('RANDOM')
                message.channel.send(embed)
            })
        }else{
        fetch('https://cryptons.ga/api/v1/covid?country=' + options.country).then(r => r.json()).then(d =>{
            if(!d.country) throw new Error('Country not found') 
            const embed = new Discord.MessageEmbed()
            .setTitle(title)
            .setDescription(desc)
            .setColor(color)
            .setFooter(footer)
            .addField('Country',d.country.replace('\n  ', ''), tf)
            .addField('Total Cases', d.totalcases , tf)
            .addField('Recovered', d.recovered , tf)
            .addField('Deaths', d.recovered)
            .addField('Discharge Rate', d.dischargePercent , tf)
            .addField('Death Rate', d.deathPercent , tf)
            .addField('Closed Cases', d.closedCases , tf)
            .setColor('RANDOM')
            .setThumbnail(d.flagimg)
            message.channel.send(embed)
        })
    }
}
}
module.exports = covid