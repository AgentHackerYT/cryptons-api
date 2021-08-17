class pablo {
    constructor(options) {
        if(!options.text) throw new Error('No Text Found')
        const a = `https://cryptons.ga/api/v1/pablo?text=${options.text}`
        return a
    }
}
module.exports = pablo