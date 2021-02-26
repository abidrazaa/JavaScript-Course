// fetch("http://jsonplaceholder.typicode.com/posts/1/comments")
//     .then(function (response){
//         return response.json()
//     })
//     .then(function (data){
//         // console.log(data)
//         var a = data;
//         console.log(a[0]["name"])
//     })

// document.getElementById("name").style.display = "none";

function search(){
    nameOfPerson = document.getElementById("github-name").value
    // nameOfPerson = "abidrazaa"
var a ;
fetch("https://api.github.com/users/"+nameOfPerson)
.then(function (response){
    return response.json()
})
.then(function (data){
    // console.log(data)
    a = data;
    console.log(a)
    document.getElementById("body-container").style.display = "block";
    document.getElementById("name").innerHTML = a["name"];
    document.getElementById("bio").innerHTML = a["bio"];
    document.getElementById("company").innerHTML = "<img src='company.png' align = 'center' height=20px width=20px> &nbsp" + a["company"];
    document.getElementById("followers").innerHTML = "Followers : " + a["followers"];
    document.getElementById("followings").innerHTML = "Followings : " + a["following"];
    document.getElementById("repos").innerHTML = "Repositories : " + a["public_repos"];
    var i = a["avatar_url"];
    document.getElementById("image").src = a["avatar_url"];

    // document.getElementById("container").style.backgroundImage = "url('i')";
    // add_img(imagePath)


    // console.log(data)
    nameOfPerson = document.getElementById("github-name").value = ""

})
}
