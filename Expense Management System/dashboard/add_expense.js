var uid;


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        uid = user.uid;
        console.log("Current user is ", uid)
        // ...
    } else {
        // User is signed out
        // ...
    }
})

let expense = (e) => {
    e.preventDefault();
    const expense = document.getElementById("expense").value
    const category = document.getElementById("category").value





    db.collection("expenses").add({
        uid: uid,
        expense: expense,
        date: Date.now(),
        category: category
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            console.log("wah")
            window.location.href = "dashboard.html"

        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}



