async function discorduser(id ,un ,ava,dis,ban,bancol,accol){
    if(typeof id === 'undefined') throw new Error('ID not found')
    if(typeof id !== 'number') throw new Error('ID Must be a number')
    fetch('https://cryptons.ga/api/v1/discorduser?id=' + id).then(r => r.json()).then(d=>{
        un(d.username)
        ava(d.avatar)
        dis(d.discriminator)
        ban(d.banner)
        bancol(d.banner_color)
        accol(d.accent_color)
    })
}
module.exports = discorduser