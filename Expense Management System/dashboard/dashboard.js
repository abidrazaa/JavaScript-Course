

// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
//     console.log("wah   ")
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });


// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.docs.forEach((doc) => {
//         console.log(doc.data());
//     });
// });


var uid;


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        uid = user.uid;
        console.log("Current user is ", uid)

        db.collection("expenses").get().then((querySnapshot) => {
            querySnapshot.docs.forEach((doc) => {
                // console.log(doc.data().uid);
                if (doc.data().uid == uid) {
                    console.log("category is :", doc.data().category)
                    console.log("Expense is :", doc.data().expense)



                    function tableCreate() {
                        var tbl = document.getElementsByClassName('table')[0];
                        // var tbl = document.createElement('table');
                        // tbl.style.width = '100%';
                        // tbl.setAttribute('border', '1');
                        // tbl.setAttribute('class', 'table');
                        var tbdy = document.createElement('tbody');
                        var tr = document.createElement('tr');



                        var td = document.createElement('td');
                        td.appendChild(document.createTextNode(doc.data().category))
                        tr.appendChild(td)

                        var td1 = document.createElement('td');
                        td1.appendChild(document.createTextNode(doc.data().expense))
                        tr.appendChild(td1)

                        var td1 = document.createElement('td');
                        td1.appendChild(document.createTextNode(doc.data().expense))
                        tr.appendChild(td1)
                            
                        tbdy.appendChild(tr);

                        tbl.appendChild(tbdy);
                        // body.appendChild(tbl)
                    }
                    tableCreate();









                }
            });
        });

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









