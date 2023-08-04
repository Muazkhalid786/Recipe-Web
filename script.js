
document.getElementById("Registeration").addEventListener('submit',function(event){
event.preventDefault();
console.log("Running");
const username=document.getElementById("user-name").value;
const useremail=document.getElementById("user-email").value;
const userpass=document.getElementById("user-pass").value;

let data = {'username': username, 'email': useremail, 'password': userpass}
localStorage.setItem("login", JSON.stringify(data))
console.log(data);
console.log(username);
    console.log( useremail);
    console.log( userpass);
   
})


// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault();
  
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;
  
//     // You can add more validation and error handling here
  
//     // For now, let's just display the user information in the console
//     console.log('Username:', username);
//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Confirm Password:', confirmPassword);
  
//     // You can send this data to the server for further processing
//   });
  