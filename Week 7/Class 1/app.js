function startHomwork(cb){
    console.log("Start")
    setTimeout(cb,2000)

}

function finishWork(){
    console.log("done")
}
startHomwork(finishWork)