document.getElementById('login-submit').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
     const userEmail = emailField.value;

    //  get user password
    const passwordField = document.getElementById('user-password');
     const userPassword = passwordField.value;
    
   //   check email and password
     if(userEmail == 'test@login.com' && userPassword == 'secret'){
        //  console.log('valid user');

        //  Redirecting to another html page
        window.location.href = 'banking.html'
     }
})