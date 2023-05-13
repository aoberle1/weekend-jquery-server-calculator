const express = require('express');

// creating empty array to store equation objects
const equationArray = [];


const app = express();
const port = 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true }));

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log('listening on port', port)
});

app.get('/inputData', function(req, res) {
    console.log('Request for /equations was made');
    // send back list of inventory 
    res.send(equationArray);
});

app.post('/inputData', function(req, res){
    console.log('POST some equations:', req.body);
    // calling function getAnswer using the argument req.body
    getAnswer(req.body)
    // pushing newObject that we created with answer property to equationArray
    equationArray.push(newObject);
    res.sendStatus(201)
});

// empty global variables used by getAnswer function
let answer;
let newObject = {}

// creating getAnswer function which will use req.body for argument
function getAnswer(reqBody) {
    // if operator property of req.body is a - character
    if( reqBody.operator === '-' ){
        // subtract input2 from input1 and set global variable answer to value
        answer = reqBody.input1 - reqBody.input2
    }
    else if( reqBody.operator === '+'){
        answer = reqBody.input1*1 + reqBody.input2*1
    }
    else if( reqBody.operator === '*'){
        answer = reqBody.input1 * reqBody.input2
    }
    else if( reqBody.operator === '/'){
        answer = reqBody.input1 / reqBody.input2
    }
    // function returns newObject that has property answer
    return newObject = {
        input1: reqBody.input1,
        operator: reqBody.operator,
        input2: reqBody.input2,
        answer: answer
    }
}
