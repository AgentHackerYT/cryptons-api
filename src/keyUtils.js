var key;
const check = require('./util')
class keyUtils {
constructor(options){
key = options.key
}
getKey(){
    if(typeof key == 'undefined') throw new Error('Key Not Found')
    return key
}
checkKey(){
check.tokencheck(key , res=>{
    return res
})
}

}
module.exports = keyUtils