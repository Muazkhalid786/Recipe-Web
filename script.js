
document.getElementById("Registeration").addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("Running");
    const username = document.getElementById("user-name").value;
    const useremail = document.getElementById("user-email").value;
    const userpass = document.getElementById("user-pass").value;
    let userarr = []
    let data = { 'username': username, 'email': useremail, 'password': userpass }
    userarr.push(data);
    localStorage.setItem("login", JSON.stringify(data))
    console.log(data);
    console.log(userarr);
    window.location.href = "home.html";
})

