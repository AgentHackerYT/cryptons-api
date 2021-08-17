class twobuttons{
    constructor(options){
        if(!options.btn1 || !options.btn2) throw new Error('btn1 or btn2 is Missing')
        const final = `https://cryptons.ga/api/v1/two-buttons?btn1${options.btn1}&btn2=${options.btn2}`
        return final
    }
}
module.exports = twobuttons
