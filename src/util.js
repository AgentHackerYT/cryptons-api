const fetch = require('node-fetch');
module.exports = {
    tokencheck:(key , res)=>{
        fetch('https://cryptons.ga/api/v1/keycheck?key=' + key).then(r => r.json()).then(d =>{
        if(d.output == "no") return res = "no"
        if(d.output == "yes") return res = "yes"
        })
    },
  makeImage:async(url , input) =>{
        const { registerFont, createCanvas, loadImage } = require("canvas");
registerFont('./Captain.otf', { family: 'Captain' })
        try {
            if (!url) return undefined;
          
            const canvas = createCanvas(200, 200);
            const context = canvas.getContext("2d");
          
            const fontSetting = "bold 50px Impact";
            context.font = fontSetting;
          
            const text = context.measureText(input);
            const textWidth = text.width;
          
            //loadImage is a function from node-canvas that loads an image
            const image = await loadImage(url);
          
            //set the canvas to the same size as the image
            canvas.width = image.width;
            canvas.height = image.height;
          
            //changing the canvas size resets the font
            //so use the fontSetting again
            context.font = fontSetting;
          
            //do some math to figure out where to put the text
            //indent the text in by half of the extra space to center it
            const center = Math.floor((canvas.width - textWidth) / 2) | 5;
            //put the text 30 pixels up from the bottom of the canvas
            const bottom = canvas.height - 30;
          
            //put the image into the canvas first
            //x: 0, y: 0 is the upper left corner
            context.drawImage(image, 0, 0);
          
            //set the color to white
            context.fillStyle = "white";
            //draw the text in white
            //x uses the value we calculated to center the text
            //y is 30 pixels above the bottom of the image
            context.fillText(input, center, bottom);
          
            //set the color to black
            context.fillStyle = "black";
            //draw the outline in black
            context.strokeText(input, center, bottom);
          
            //return the buffer
            return canvas.toBuffer();
            } catch(e) {
              console.log(e)
            }
    }
}