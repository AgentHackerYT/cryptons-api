const fetch = require('node-fetch');
const {MessageEmbed} = require('discord.js')
var key , movie
class imdb {
    constructor(options) {
        if(typeof options.key == 'undefined') throw new Error('IMDB Api Key Missing')
        if(typeof options.movie == 'undefined') throw new Error('Movie Name Missing')
        movie = options.movie
        key = options.key
        fetch(`https://cryptons.ga/api/v1/imdb?key=${key}&movie=${movie}`).then(r=>r.json()).then(movie=>{
            const embed = new MessageEmbed()
            .setTitle(movie.title)
            .setColor("RANDOM")
            .setThumbnail(movie.poster)
            .setDescription(movie.plot)
            .setFooter(`Ratings: ${movie.rating}`)
            .addField("Country", movie.country, true)
            .addField("Languages", movie.languages, true)
            .addField("Type", movie.genere, true);
            options.message.channel.send(embed)
        })
    }
}
module.exports = imdb