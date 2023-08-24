# Simple SVG Maker

## Summary

Code that uses classes to take user input and create an SVG file.

## Sources

- Used mini-project in 10-OOP
- Worked with Chelsea, Donnie, and Nedda in study groups

## Description

When index.js is run, it calls the CLI class to create a new object whichs then calls on the circle/square/triangle classes. In the terminal, the user is asked 4 questions about what they would like in the SVG file. Once these are input, an SVG is generated and saved into the /example folder with the shape and characters used being part of the name.

The test are not run exactly as the example is given as I wanted to not have to make setter functions for the colors. I think this reduced the number of lines of code needed while still being clear.

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Collaborators

- Donnie Rawlings: https://github.com/drawlin22
- Chelsea Wagner: https://github.com/caf62219
- Nedda Elsayed: https://github.com/Lven-Nemsy/

Link to Repo:  
https://github.com/Kylyote/bootcamp-svg-label

Link to video:  
https://drive.google.com/file/d/1NwmNpzL6tqUDf0xEer4ex3ANKpa-AZsU/view
