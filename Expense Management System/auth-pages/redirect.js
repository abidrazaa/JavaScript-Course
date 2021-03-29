let redirect = (value) => {
    if (value == "signup"){
        window.location = "signup.html"
    }
    else if(value == "login"){
        window.location = "login.html"
    }
    else if(value == "add-expenses"){
        window.location.href = "../dashboard/add-expense.html"
    }
    else if(value == "add_expense.html"){
        window.location.href = "../dashboard/add_expense.html"
    }
    
}

// var data =[];
// var userData = {};

// let getData = (event) => {
//     event.preventDefault();
//     // swal("Good job!", "You clicked the button!", "success");
//     const username = document.getElementById("username").value
//     const password = document.getElementById("password1").value
//     const email = document.getElementById("email").value
//     if(!username || !password || !email){
//         alert("Please enter in all fields")
//     }

//     userData = {
//         username : username,
//         password : password,
//         email : email
//     }

    
//     // userData["username"] = username;
//     // userData["password"] = password;
//     // userData["email"] = email;

//     data.push(userData);
//     console.log(data);

//     users = JSON.stringify(data);
//     localStorage.setItem("AllUsers", users)
//     a = localStorage.getItem("AllUsers")


    // window.location.assign("login.html")
    // window.location = "../dashord/expense.html"
    // console.log(JSON.parse(a))
    // console.log(a)
    





    // let users = localStorage.getItem('AllUsers');
    // console.log(users)
    // if(users == null){
    //     users = "{}"
    //     console.log("wa")
    // }
    // users = [JSON.parse(users)];
    // users.push(userData);


    // userData = JSON.stringify(users);
    // localStorage.setItem('AllUsers', users)


    // console.log(data)
    // users = JSON.parse(users);
    // users.push(userData);
    // data = JSON.stringify(users)

    // console.log(data)

    // console.log('users : ', users)
    // users = JSON.parse(users)
  
    // users.push(userData)
  
    // console.log('users :', users)
  
    // let stringUsersData = JSON.stringify(users)
  
 
// }



// currentUser;
let login = (event) => {
    event.preventDefault();

    email = document.getElementById("email").value
    password = document.getElementById("password").value

    allUsers = localStorage.getItem("AllUsers");
    allUsers = JSON.parse(allUsers);

    for(i=0; i < allUsers.length; i++){
        if(email == allUsers[i].email && password == allUsers[i].password){

            console.log(allUsers);
            console.log("Email: ",email)
            currentUsername = allUsers[i].username;
            localStorage.setItem("currentUser",currentUsername)
            window.location.assign("../dashbord/expense.html")
        }
    }

}