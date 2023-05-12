$(document).ready(onReady);

function onReady(){
    console.log( 'jq');
    $('#clear-button').on('click', clearInputs);
    $('#input-fields').on('submit', postInputs);
    $('#addition').on('click', addSelect);
    $('#subtraction').on('click', subtractSelect);
    $('#multiplication').on('click', multiplySelect);
    $('#division').on('click', divideSelect);
    getEquations();
}

function clearInputs () {
    $('.inputTextBox').val('');
    $('.math-button').css("background-color", "white");
}

function postInputs(event){
    event.preventDefault();

    const input1 = $('#value-one').val();
    const input2 = $('#value-two').val();

    $('#value-one').val('');
    $('#value-two').val('');

    $.ajax({
        method: 'POST',
        url: '/inputData',
        data: {
        // data inputs are variables created earlier at top of addInventory
        input1,
        input2
        }
        }).then(function(response){
            // console log will show up in terminal - .then runs after .ajax is finished
            console.log( 'Success!' );
            // calling function getInventory (which grabs all the items and renders them to the DOM
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
        // after .ajax completes, THEN run this function that has access to response from server
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

    // for loop to loop through items of inventory
    for (let equation of equations){
        $('#past-equations').append(`
        <li>${equation.input1}, ${equation.input2}</li>
        `);
    }
}

function addSelect() {
    $('.math-button').css("background-color", "white");
    $('#addition').css("background-color", "red")
}

function subtractSelect() {
    $('.math-button').css("background-color", "white");
    $('#subtraction').css("background-color", "red")
}

function multiplySelect() {
    $('.math-button').css("background-color", "white");
    $('#multiplication').css("background-color", "red")
}

function divideSelect() {
    $('.math-button').css("background-color", "white");
    $('#division').css("background-color", "red")
}