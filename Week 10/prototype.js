const myData = {
    name:"Abid Rza",
    uni: "NED university",
    area : "scheme 33"
}


var createData = (myData) => {
    const {name,uni,area} = myData;
    return {
        name : name ,
        uni : uni ,
        area : area
    }
}



function Identity(myData){
    const {name,uni,area} = myData;

        this.name = name;
        this.uni = uni;
        this.area = area;

        // console.log(this.area)
    
}

Identity.prototype.getArea = function() {
    // console.log(this.area)

    return this.area;
}



// let calldata = createData(myData)
// console.log(calldata)

Identity1 = new Identity(myData)
console.log("Identity 1 : " , Identity1)
console.log(Identity1.getArea())

