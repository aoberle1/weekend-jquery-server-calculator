const express = require('express');

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
    // we want to add our input equation into our equation array
    // input equation item is our req.body, pushing it into the equationArray
    // calling function getAnswer using the argument req.body
    getAnswer(req.body)
    
    equationArray.push(newObject);
    res.sendStatus(201)
});

let answer;
let newObject = {}

function getAnswer(reqBody) {
    // let input1;
    // let input2;

    if( reqBody.operator === '-' ){
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
    return newObject = {
        input1: reqBody.input1,
        operator: reqBody.operator,
        input2: reqBody.input2,
        answer: answer
    }
}
