function onClickFunction() {
    var studentNames = ["Abid", "Yazdan", "Kazim"];
    var output = studentNames.join("/");
    document.write(output);
}

function checkPalindrome() {
    var word = prompt("Enter word to check palindrome: ")
    var splittedArray = word.split("");     // ["m","a","d","a","m"]
    var reversedArray = splittedArray.reverse();
    var newWord = reversedArray.join("");
    console.log(newWord);
    if (word == newWord) return alert("Yes it is a palindrome")
    return alert("No!! it is not a palindrome")

}

function reducedPalindrome() {
    var word = prompt("Enter word to check palindrome: ");
    return word.toLowerCase().split("").reverse().join("") == word.toLowerCase();
}