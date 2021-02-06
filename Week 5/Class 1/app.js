studentNames = ["Abid", "Yazdan","Kazim"]

studentNames.find(function(studentName){
    return studentName == "Yazdan"
})

 
  // For each loop

function onClick(){
    studentNames = ["Abid", "Yazdan", "Kazim"]

    function withForEach(name){
        document.write(name+" WAH WAH")

    }
    studentNames.forEach(withForEach)

    // document.write(a)
}


function wah(){
    studentNames = ["Abid", "Yazdan", "Kazim"]

    var a = studentNames.map(function(name){
        if(name!="Abid") return name + "Bhai"
        return name
    })
    
    document.write(a)
}