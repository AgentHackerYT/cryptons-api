const fetch =require('node-fetch')
class MS {
    constructor(options){
        this.size = options.size 
        this.bomb = options.bomb
    }
    async output(){
        const {output} = await fetch(`https://cryptons.ga/api/v1/ms?size=${this.size || 20}&bombs=${this.bomb || 10}`).then(r => r.json())
            return output
    }
}
module.exports = MS