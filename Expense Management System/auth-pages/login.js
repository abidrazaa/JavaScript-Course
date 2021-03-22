


  let getData = (event) => {
    event.preventDefault();
    // swal("Good job!", "You clicked the button!", "success");
    const password = document.getElementById("password").value
    const email = document.getElementById("email").value
    // if(confirmPassword != password){
    //     alert("Password doesnot match")
    //     return
    
    if(!password || !email){
        alert("Please enter in all fields")
        return
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("SUCCESS")
    // var user = userCredential.user;
    document.getElementById("password").value = ""
    document.getElementById("email").value = ""
    // window.location.href = "login.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("FAIL: ",errorMessage )
  });


  }
