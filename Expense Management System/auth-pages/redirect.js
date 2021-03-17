let redirect = (value) => {
    if (value == "signup"){
        window.location = "signup.html"
    }
    else if(value == "login"){
        window.location = "login.html"
    }
}

var data =[];
let getData = (event) => {
    event.preventDefault();
    // swal("Good job!", "You clicked the button!", "success");
    const username = document.getElementById("username").value
    const password = document.getElementById("password1").value
    const email = document.getElementById("email").value
    if(!username || !password || !email){
        alert("Please enter in all fields")
    }
    var userData = {};

    userData["username"] = username;
    userData["password"] = password;
    userData["email"] = email;

    data.push(userData);
    console.log(data);

    users = JSON.stringify(data);
    localStorage.setItem("AllUsers", users)
    a = localStorage.getItem("AllUsers")
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
  
 
}
