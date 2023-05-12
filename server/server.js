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
    console.log('Request for /inventory was made');
    // send back list of inventory 
    res.send(equationArray);
});

app.post('/inputData', function(req, res){
    console.log('POST some equations:', req.body);
    // we want to add our input inventory into our inventory array
    // input inventory item is our req.body, pushing it into the inventoryArray array
    equationArray.push(req.body)
    res.sendStatus(201)
});