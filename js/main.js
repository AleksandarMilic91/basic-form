const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/; //regex for a to z and A to Z, and 6 to 12 characters long

form.addEventListener('submit', function(e){
    e.preventDefault();
    const user_value = username.value;

    if(usernamePattern.test(user_value)){
        feedback.innerText = 'Username is valid';
    } else {
        feedback.innerText = 'Username is not valid';
    }

});

username.addEventListener('keyup', function(e){
    if(usernamePattern.test(username.value)){
        username.setAttribute('class','success');
    } else {
        username.setAttribute('class','error');
    }

});