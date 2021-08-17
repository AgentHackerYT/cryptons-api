class mocktext{
constructor(options){
if(typeof options.text == 'undefined') throw new Error('No Text found')
const a = `https://cryptons.ga/api/v1/mocktext?text=${options.text}`
return a
}
}
module.exports = mocktext