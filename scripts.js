const form = $('#login-form');
const cactus = $('.cactus')
const mouth = $('.mouth')

form.on('change', function(e) {
    const usernameField = $('#username');
    const passwordField = $('#password');

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

    if (usernameField.val() === 'correct' && passwordField.val() === 'correct') {  //both correct
        cactus.addClass('move-up');
        mouth.addClass('move-up');
    }
    else if (usernameField.val() !== 'correct' && passwordField.val() !== 'correct') { // both wrong
        cactus.addClass('move-down')
    }
})