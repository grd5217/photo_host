

const loginBut = document.getElementById('login-but');

loginBut.addEventListener('click', function() {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value; 
    const invalidLoginMsg = document.getElementById('invalid-login');


    if (username === '1' && password === '1') {
        alert('Login successful!');
        window.location.href = 'user_home.html';
        invalidLoginMsg.style.visibility = 'hidden';
    }
    else {
        invalidLoginMsg.style.visibility = 'visible';
    }
});
