var interval;

function startTimer(){
    var interval = setInterval(start,1000)

    function start(){
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    document.getElementById("time").innerHTML = hours + " : "+minutes + " : " + seconds ;
    
    }
    
}

function stopTimer(){
    var interval = clearInterval(interval);
    console.log("han")
        var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    document.getElementById("time").innerHTML = hours + " : Wah"+minutes + " : " + seconds ;


}       




