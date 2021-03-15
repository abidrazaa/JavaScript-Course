let redirect = (value) => {
    if (value == "signup"){
        window.location = "signup.html"
    }
    else if(value == "login"){
        window.location = "login.html"
    }
}

let getData = (event) => {
    event.preventDefault();
    data = {
        username : document.getElementById("username").value,
        password : document.getElementById("password1").value,
        email : document.getElementById("email").value
    }
    console.log(data)
}