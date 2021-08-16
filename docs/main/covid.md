# Covid Command For Discord.js Using Cryptons API
```js
/**
 * @name Covid
 * @kind constructor
 * @param {any} [options.message]
 * @param {any} [options.country]
 * @param {any} [options.title]
 * @param {any} [options.description]
 * @param {any} [options.color]
 * @param {any} [options.footer]
 * @param {true | false} [options.addFieldOption]
 */
```
# Example
```js
const Discord = require('discord.js')
const client = new Discord.Client()
const { Covid } = require('cryptons-api')
client.on('ready' , () =>{
console.log('ready')
})
client.on('message', async(message) =>{
if(message.content.toLowerCase().startsWith('!covid')){
new Covid({
    message: message,
    country: 'world',
    title: title,
    description: 'Covid Cases',
    color: 'RANDOM',
    footer: 'Made By Cryptons API NPM',
    addFieldOption : true || false
})
}
})
client.login('YOUR_TOKEN')
```
- Made According to V12
