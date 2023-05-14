# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

-Get server running
    -initialize and install express
    -check to make sure these are present in server.js:
        const express = require('express');
        const app = express();
        const port = 5000;
        app.use(express.static('server/public'));
        app.listen(port, () => {
            console.log('listening on port', port)
        });
    -ensure "start": "node server/server.js" is in package.json


-Create 2 input fields, 4 buttons for the math operations, 1 submit button labeled =, and a clear button that clears input fields
    -Input fields and buttons created in HTML with id's and classes
    -Clear button runs clear function upon being clicked - programmed in client.js

-Submit button bundles inputs as object, sends to server with .ajax POST
    -set up corresponding POST code on client.js and server.js with url set to inputData
    -after .ajax POST runs on client.js, server.js calls a function to add answer property to bundled object
    -server.js POST pushes new object with answer property into array of equations

-Submit button runs .ajax GET request after POST
    -set up corresponding GET code on client.js and server.js with url set to inputData
    -server.js sends the array of equations as response to the GET request
    -client.js renders the equations to the DOM using the renderToDOM function in the corresponding html elements

-Stretch Planning:
    - Make Calculator Buttons (10 new buttons for now - decimal later)
        -New button order:
            Output Row - Output Field, C (clear button) - clear button still works as before - empties single field only (check if used class or ID) - delete 2nd input field from HTML
            1st Row - 7, 8, 9, +
            2nd Row - 4, 5, 6, -
            3rd Row - 1, 2, 3, *
            4th Row - 0, =, /
            - give buttons ID and class
    
    - Make button inputs display to DOM in output field
        - hey jquery, on button click with class of number buttons, run function postNumbers
            -button input ajax POSTed and pushed into "inputArray" in server.js in app.post,  ajax POST then funs function getNumbers
            -getNumbers function will run an ajax GET request for the inputArray, server will respond with it
            -ajax GET will run renderToDOM function
            -renderToDOM function will append the output field HTML element with the last item in the inputArray (inputArray.length-1)
                - OR in case that doesn't work - empty output field each time function is run, append it with the full array by looping through each index of array
            


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
