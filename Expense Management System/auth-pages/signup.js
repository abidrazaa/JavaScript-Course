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
        var user = userCredential.user;
        // console.log(user.uid);

        
        db.collection("users").add({
            username: username ,
            email: email,
            password: password,
            uid: user.uid
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            console.log("wah")
            // console.log("uid in signup: ",user.uid)

            window.location.href = "login.html"

        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        // Signed in 
        console.log("SUCCESS")
        document.getElementById("username").value = ""
        document.getElementById("password").value = ""
        document.getElementById("password1").value = ""
        document.getElementById("email").value = ""
        // ...
    })
    .catch((error) => {

        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("FAIL: ",errorMessage )

        // ..
    });

    // db.collection("users").add({
    //     username: username ,
    //     email: email,
    //     password: password
    // }).then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    //     console.log("wah")
    // })
    // .catch((error) => {
    //     console.error("Error adding document: ", error);
    // });
}