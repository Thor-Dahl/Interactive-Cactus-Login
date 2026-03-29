const cactus = $('.cactus');
const mouth = $('.mouth');
const flower = $('.flower-head');

const form = $('#login-form');
const usernameField = $('#username');
const passwordField = $('#password');

form.on('change', function(e) {
    

    const field = $(e.target);
    const value = field.val().trim();

    //indiv inputs
    if (value === 'correct') {
        field.removeClass('red');
        field.addClass('green');
    } 
    else {
        field.removeClass('green');
        field.addClass('red');
    }

    //overall form
    cactus.removeClass('move-up move-down');
    mouth.removeClass('move-up');
    flower.removeClass('show');

    if (usernameField.val() === 'correct' && passwordField.val() === 'correct') {  //both correct
        cactus.addClass('move-up');
        mouth.addClass('move-up');
    }
    else if (usernameField.val() !== 'correct' && passwordField.val() !== 'correct') { // both wrong
        cactus.addClass('move-down')
    }
})

form.on('submit', function(e) {
    e.preventDefault();
    flower.removeClass('show');
    if (usernameField.val() === 'correct' && passwordField.val() === 'correct') {  //both correct
        flower.addClass('show');
    }
    else if (usernameField.val() !== 'correct' && passwordField.val() !== 'correct') { // both wrong
        
    }
})