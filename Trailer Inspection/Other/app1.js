

var div = document.getElementsByClassName("switch-page");
var buttonPrevious = document.getElementsByClassName("previous");
var buttonNext = document.getElementsByClassName("next");
var header = document.getElementsByClassName("header");

// form.onsubmit = () => {
//     return false;
// }




var currentDiv = 0;
// header[0].style.display = "block";
div[currentDiv].style.display = "block";
buttonNext[0].style.display = "block";
// next-previous-Btn.style.display = "block";

if (currentDiv == 0) {
    buttonPrevious[0].style.display = "none";
}

function next() {
    // console.log("Wah")
    currentDiv++
    if (currentDiv > 3) {
        // form.onsubmit = () => {
        //     return true;
        // }
        
        window.location = "form_2.html"
    }

    else {
        var backDiv = currentDiv - 1;
        div[backDiv].style.display = "none";
        if (currentDiv == 0) {
            buttonPrevious[0].style.display = "none";
        }

        if (currentDiv >= 1 && currentDiv <= 4) {
            // console.log("Wah")

            div[currentDiv].style.display = "block";
            buttonPrevious[0].style.display = "block";
            window.scrollTo(0,0)


        }

        if (currentDiv == 3) {
            buttonNext[0].innerHTML = "Submit"
        }

    }

}


function previous() {
    if (currentDiv != 4) {
        buttonNext[0].innerHTML = "Next"

    }
    if (currentDiv == 1) {
        buttonPrevious[0].style.display = "none";
    }
    div[currentDiv].style.display = "none";

    currentDiv--
    var backDiv = currentDiv - 1;
    div[currentDiv].style.display = "block";
    window.scrollTo(0,0)


}