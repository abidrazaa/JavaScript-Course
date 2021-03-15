function userVal(){
    console.log(this.num)
}


var a = {
    num : 5 ,
    val : userVal
}
var b = {
    num : 6 ,
    val : userVal
}
var c = {
    num : 7 ,
    val : userVal
}
console.log(a.val())

console.log(userVal.call(a))
console.log(userVal.call(b))
console.log(userVal.call(c))
console.log(userVal.apply(a))



var student = {
    firstName: "Abid",
    lastName : "Raza",
    fullName : ()  => {
        return this.firstName + this.lastName
    }
}


console.log(student.fullName())