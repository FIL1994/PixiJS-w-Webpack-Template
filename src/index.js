/**
 * @author Philip Van Raalte
 * @date 2017-12-06
 */
const PIXI = require('pixi.js');
import setupWebFonts from './config/webFonts';

const app = new PIXI.Application(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);

setupWebFonts({
  fonts: ['Rock+Salt'],
  active: () => {
    let textSample = new PIXI.Text('Pixi.js w/ Google Fonts', {
      fontFamily: 'Rock Salt',
      fontSize: 25,
      fill: 'blue',
      align: 'left'
    });
    textSample.position.set(120, 150);

    app.stage.addChild(textSample);
  }
});

let basicText = new PIXI.Text('Pixi w/ Webpack Template', {fontSize: 40});
basicText.x = 30;
basicText.y = 90;

app.stage.addChild(basicText);
