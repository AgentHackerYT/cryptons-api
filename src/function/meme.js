var fetch = require('node-fetch');
var baseurl = "https://cryptons.ga"
async function meme(img ,title , up , down , com , url){
    fetch(baseurl + '/api/v1/meme').then(r => r.json()).then(d=>{
        img(d.image)
        title(d.tittle)
        up(d.upvotes)
        down(d.downvotes)
        com(d.comments)
        url(d.url)
    })
}
module.exports = meme