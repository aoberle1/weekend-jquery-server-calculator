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

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
