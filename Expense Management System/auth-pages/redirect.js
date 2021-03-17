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
    // swal("Good job!", "You clicked the button!", "success");
    const username = document.getElementById("username").value
    const password = document.getElementById("password1").value
    const email = document.getElementById("email").value
    if(!username || !password || !email){
        alert("Please enter in all fields")
    }
    const userData = {
        email,
        password,
        username
      }

    let users = localStorage.getItem('AllUsers');
    if(!)
    users = [JSON.parse(users)];
    users.push(userData);


    userData = JSON.stringify(users);
    localStorage.setItem('AllUsers', users)


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
