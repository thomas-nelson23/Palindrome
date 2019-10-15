var results = document.getElementById('result').innerHTML;

var checkString = function () {
    let myString = document.getElementById('textInput').value;

    var condensedString =
        myString.toLowerCase().replace(/[^a-z]/g, '')


    console.log("Condensed String: ", condensedString);

    //split, reverse, join
    var reversedString = condensedString.split('').reverse().join('');


    //result message
    if (condensedString == reversedString) {
        result.innerHTML = "It's a palindrome!"
    } else {
        result.innerHTML = "It's not a palindrome!";
    }
}
