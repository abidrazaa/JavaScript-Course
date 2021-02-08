// var interval;
// start()


function startTimer() {
    stop = setInterval(start, 1000)
}
function  stopTimer(){
   clearInterval(stop)
}
function start() {

    var time = new Date();
    var AmPM = "";
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    console.log("before time")
    changeTime(hours,minutes,seconds)
 
}

function changeTime(hours,minutes,seconds){
    console.log("in time")
    if(hours>12){

        hours = hours - 12;
        var AmPM = "PM"
    console.log("in if")

    }else{
        AmPm = "AM"
    }
    if(seconds<10){
        var seconds = "0"+seconds
    }
    if(minutes<10){
        var minutes = "0"+minutes
    }
    if(hours<10){
        var hours = "0"+hours
    }
    var time = hours + " : " + minutes + " : " + seconds + " " + AmPM;
    document.getElementById("time").innerHTML = time;
}

// start();

// function stopTimer(){
//     var interval = clearInterval(interval);
//     console.log("han")
//         var hours = new Date().getHours();
//     var minutes = new Date().getMinutes();
//     var seconds = new Date().getSeconds();
//     document.getElementById("time").innerHTML = hours + " : "+minutes + " : " + seconds ;


// }       



















