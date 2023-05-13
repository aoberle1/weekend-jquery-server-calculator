$(document).ready(onReady);

function onReady(){
    // console.log( 'jq');
    $('#clear-button').on('click', clearInputs);
    $('#input-fields').on('submit', postInputs);
    $('#addition').on('click', addSelect);
    $('#subtraction').on('click', subtractSelect);
    $('#multiplication').on('click', multiplySelect);
    $('#division').on('click', divideSelect);
    // when document is ready, run function getEquations
    getEquations();
}

// creating operator global variable used by postInputs function
let operator;

// function to be run when clear button is clicked
function clearInputs () {
    // sets value of both inputs in HTML to an empty string (clears them)
    $('.inputTextBox').val('');
    // resets all 4 operator buttons to background color white
    $('.math-button').css("background-color", "white");
}

// function that runs when submit (=) button is clicked
function postInputs(event){
    // prevents form default behavior from occuring
    event.preventDefault();

    // setting global variables equal to values of the elements with id's below
    const input1 = $('#value-one').val();
    const input2 = $('#value-two').val();
// emptying out input fields after getting values from them and storing the values in variables
// input1 and input2
    $('#value-one').val('');
    $('#value-two').val('');

    $.ajax({
        method: 'POST',
        url: '/inputData',
        data: {
        // data inputs are two input values and operator value from
        input1,
        operator,
        input2,
        }
        }).then(function(response){
            // console log will show up in terminal - .then runs after .ajax POST is finished
            console.log( 'Successly POSTed!' );
            // calling function getEquations (which grabs all the items and renders them to the DOM
            // by calling the renderToDom function)
            getEquations();
            // sends back error code if something goes wrong
        }).catch(function(error) {
            alert('Error with inventory post!');
            console.log('Error with post:', error);
        })
}

function getEquations(){
    $.ajax({
        method: 'GET',
        url: '/inputData'
        // after .ajax GET completes, THEN run this function that has access to response from server
    }).then(function(response){
        // response should be list of equations
        console.log( 'Success!', response );
        // calling function renderToDom and using our response as the argument
        renderToDom(response);
        // if there is an error from the server, run this function with argument of error
    }).catch( function ( error ){
        alert( 'Request Failed' );
        console.log( 'Request Failed:', error );
    })
}

function renderToDom(equations){
    $('#past-equations').empty();
    // for loop to loop through equations in equations array
    for (let equation of equations){
        // appending element with id past-equations
        $('#past-equations').append(`
        <li>${equation.input1} ${equation.operator} ${equation.input2} = ${equation.answer} </li>
        `);
        // setting text of element with id equation-solution to the value of equation.answer
        // which is the most recent solution in the equationArray
        $('#equation-solution').text(`${equation.answer}`)
    }
}

// function that runs when + button is clicked on DOM
function addSelect() {
    // sets background color of all 4 operator buttons to white with class math-button
    $('.math-button').css("background-color", "white");
    // sets background color of operator button clicked to red by referring to it's ID
    $('#addition').css("background-color", "red")
    // set value of global operator to +
    operator = '+';
}

function subtractSelect() {
    $('.math-button').css("background-color", "white");
    $('#subtraction').css("background-color", "red")
    operator = '-';
}

function multiplySelect() {
    $('.math-button').css("background-color", "white");
    $('#multiplication').css("background-color", "red")
    operator = '*';
}

function divideSelect() {
    $('.math-button').css("background-color", "white");
    $('#division').css("background-color", "red")
    operator = '/';
}