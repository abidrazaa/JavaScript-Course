let getData = (event) => {
    event.preventDefault();
    // swal("Good job!", "You clicked the button!", "success");
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("password1").value
    const email = document.getElementById("email").value
    if(confirmPassword != password){
        alert("Password doesnot match")
        return
    }
    if(!username || !password || !email){
        alert("Please enter in all fields")
        return
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in 
    console.log("SUCCESS")
    var user = userCredential.user;
    document.getElementById("username").value = ""
    document.getElementById("password").value = ""
    document.getElementById("password1").value = ""
    document.getElementById("email").value = ""
    window.location.href = "login.html"
    // ...
    })
    .catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("FAIL: ",errorMessage )

    // ..
    });

}