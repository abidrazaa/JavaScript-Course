

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

// document.getElementById("userToShow").innerHTML = "Welcome"



var uid;
var nameToShow;

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        uid = user.uid;
        console.log("Current user is ", uid)


        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.docs.forEach((doc) => {
                if (uid == doc.data().uid) {
                    nameToShow = doc.data().username;
                    // document.getElementById("user").value = "Welcome "+doc.data().username;
                    // console.log("aftrer")
                }

            });
        });

        db.collection("expenses").get().then((querySnapshot) => {
            querySnapshot.docs.forEach((doc) => {
                // console.log(doc.id);
                if (doc.data().uid == uid) {
                    console.log("category is :", doc.data().category)
                    console.log("Expense is :", doc.data().expense)

                    document.getElementById("p1").innerHTML = "Welcome " + nameToShow;


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

                        var btn = document.createElement("button");
                        btn.setAttribute("class", "btn btn-default btn-sm")
                        var td2 = document.createElement('td');
                        var spanned = document.createElement('span')
                        spanned.setAttribute("id", doc.id)
                        // spanned.setAttribute("onclick",editData(doc.id))

                        spanned.setAttribute("class", "glyphicon glyphicon-edit")
                        btn.appendChild(spanned)
                        td2.appendChild(btn)
                        tr.appendChild(btn)


                        var btn2 = document.createElement("button");
                        btn2.setAttribute("class", "btn btn-default btn-sm")
                        docId = doc.id
                        console.log("DOC ID OUT", docId);

                        btn2.setAttribute("onclick", "deleteData(docId)")

                        var td2 = document.createElement('td');
                        var spanned = document.createElement('span')
                        // spanned.setAttribute("id",doc.id)
                        // spanned.setAttribute("onClick",deleteData(doc.id))
                        spanned.setAttribute("class", "glyphicon glyphicon-trash")
                        btn2.appendChild(spanned)
                        td2.appendChild(btn2)
                        tr.appendChild(btn2)



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




let deleteData = (Id) => {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {

            if (willDelete) {
                db.collection("expenses").doc(Id).delete().then(() => {
                    console.log("Document successfully deleted!");
                    window.location = "dashboard.html"
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });


}





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









