class cti {
    constructor(options) {
        if(!options.text) throw new Error('No Text Found')
        const a = `https://cryptons.ga/api/v1/cti?code=${options.text}`
        return a
    }
}
module.exports = cti