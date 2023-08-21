const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

class CLI {
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
      .then ((response) => {
          if (response.shape === 'Circle'){
            const userSVG = new Circle();
          }else if(response.shape === 'Square') {
            const userSVG = new Square();
          }else{
            const userSVG = new Triangle();
          }
          return writeFile('logo.svg', userSVG);
        }
      )
      // Write file to logo.svg
      // .then(
      // );
      .catch((err) => {
        console.log(err);
        console.log('Shit is hella broke');
      });
  }
}
