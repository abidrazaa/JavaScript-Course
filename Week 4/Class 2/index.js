var studentNames = ["Abid","Raza","Raza","Raza","Raza","Naqvi"];

function filterFunction(studentName){
    return studentName == "Raza"
}

var a = studentNames.filter(filterFunction)
document.write(a)


// document.write(studentNames.includes("abid"))


document.write("<br>")
document.write("<br>")


//   FILTER OUT THE NUMBERS THAT ARE EVEN

var numbers = [1,2,4,4,6,8,7,0,56,78,9]

function filterEven(number){
    return number%2==0
}

var answerOfEven = numbers.filter(filterEven)
document.write(answerOfEven)





var studentNames = ["Abid","Raza","Syed","Ali","RaZa","Razi"];

function wah(Name){
    return ["abid","raza"].includes(Name.toLowerCase())
}

var kya = studentNames.filter(wah)
document.write(kya)
