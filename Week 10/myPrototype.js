let array = [2,324,43,2,1,45,7,8,9];

function Multiply(array){
    this.array = array;
    // console.log(this.array)
}

Multiply.prototype.mul = (num)=>{
    console.log(num)
    console.log(array)
    var newArray = array.map(myFunc)
    function myFunc(item){
        return num * item;
    }
    return newArray

}

var a = new Multiply(array)
console.log(a.mul(9))