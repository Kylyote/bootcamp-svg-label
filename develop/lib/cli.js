// Import all required modules
const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const SVG = require('./svgGen.js');

class CLI {
  // Only the prototype is used as the index.js doesn't need to do more than call the CLI file.
  constructor(){
  }

  // Run code to ask user what input they want.
  run() {
    return inquirer 
      .prompt([
        {
          type: 'input',
          name: 'letters',
          message: 'Please enter up to 3 characters.',
        },
        {
          type: 'input',
          name: 'letterColor',
          message: 'What color would you like your characters?',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Do you want your text to be in a circle, square, or triangle?',
          choices:['Circle','Square','Triangle'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: "What color would you like the background shape?"
        }
      ])
      .then ((children) => {

          // Call SVG class which combines all the other shape classes
          const svg = new SVG(children);
          // Write the generated file to logo-<shape>-<text>.svg in the example folder
          return writeFile(`./develop/example/logo-${children.shape}-${children.letters}.svg`, svg.render());
        }
      )

      .catch((err) => {
        console.log(err);
        console.log('We in the business call this, "Broke as hell."');
      });
  }
}

module.exports = CLI;