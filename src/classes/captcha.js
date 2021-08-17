class captcha {
    constructor(options){
     if(!options.text) throw new Error('No Text Found')
     const a = `https://cryptons.ga/api/v1/captcha?code=${options.text}`
    }
}