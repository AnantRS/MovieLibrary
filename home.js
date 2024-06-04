document.addEventListener('DOMContentLoaded', function(){

    
        //console.log(1);
        function login(name, passwrd) {
            // Hardcoded credentials 
            const user1 = "anant";
            const pass1 = "anant123";
    
            const user2 = "raj";
            const pass2 = "raj456";
    
            const user3 = "shekhar";
            const pass3 = "shekhar789";
    
            if ((name === user1 && passwrd === pass1) 
                ||(name === user2 && passwrd === pass2) 
                ||(name === user3 && passwrd === pass3)) {
                // Successful login
                return true;
            } else {
                // Failed login
                return false;
            }
        };
    
        document.getElementById('form').addEventListener('submit', function(event){
            //console.log("hi");
            event.preventDefault();
            //console.log("hi1");
            const enteredUsername = document.getElementById('username').value;
            const enteredPassword = document.getElementById('password').value;
    
            console.log(enteredUsername);
            console.log(enteredPassword);
    
            const isAuthenticated = login(enteredUsername, enteredPassword);
    
            if (isAuthenticated) {
                // Redirect to home page
                window.location.href = "home.html";
            } else {
                // Display error message or perform other actions for failed login
                console.log("Invalid username or password");
            }
        });



   
});
