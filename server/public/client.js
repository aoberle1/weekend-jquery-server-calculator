$(document).ready(onReady);

function onReady(){
    console.log( 'jq')
    $('#clear-button').on('click', clearInputs)
}

function clearInputs () {
    $('.inputTextBox').val('')
}