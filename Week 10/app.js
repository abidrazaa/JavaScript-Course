const studentData1 = {
    name : "Abid",
    classCode : "Ex-MS11",
    id : "12"
}
const studentData2 = {
    name : "Raza",
    classCode : "Ex-MS11",
    id : "12"
}
const studentData3 = {
    name : "Naqvi",
    classCode : "Ex-MS11",
    id : "12"
}
// console.log(studentData)



let createStudent = (studentData) => {
    // console.log(studentData)
    const {name,classCode,id} = studentData;
    return {
        name : name,
        classCode : classCode,
        id : id

    }
}



let student = createStudent(studentData1);
console.log(student)





function Student({name,classCode,id}) {
    this.name = name;
    this.classCode = classCode;
    this.id = id;
}

Student.prototype.getName = function () {
    return this.name;
}

//  OUTPUT
            // student1.getName()
            // "Abid"
            // student2.getName()
            // "Raza"
            // student3.getName()
            // "Naqvi"

student1 = new Student(studentData1)
student2 = new Student(studentData2)
student3 = new Student(studentData3)
console.log("Student 1 : " , student1)
console.log("Student 2 : " ,student2)
console.log("Student 3 : " ,student3)








