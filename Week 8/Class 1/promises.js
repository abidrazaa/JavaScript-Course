function getName(){
    return new Promise (function(resolve,reject){
        var name = "Abid";
        reject("nhy mila");
    }
    )
}

getName().then(function (data){        // .then jb use karenge jb resolve hoga
        console.log("resolved data :", data)
    }).catch(function(error){             // .catch p jb ayega jb reject hui hogi request
        alert(error);
    })


function eventPlanning(){
    return roomAvailable().then(speakerComing)
    .then(final)
    // .catch(function(error){
    //     console.log(error);
    // })

}

function speakerComing(){
    return new Promise(function(resolve, reject){
        speakerComing = false;
        speakerComing ? resolve("Speaker is coming") : reject("Speaker is busy");
    })
}

function roomAvailable(){
    return new Promise(function(resolve, reject){
        roomAvailable = true;
        roomAvailable ? resolve("Room is available") : reject("Room is not available");
    })
}


function final(){
    return new Promise(function(resolve, reject){
        resolve("All set to go!!")
    })
}

eventPlanning().then(function(data){
    console.log("SUCCESS :" + data)
}).catch(function(error){
    console.log("Fail :" + error)
})