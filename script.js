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


// end palindromer, begin random practice stuff

var printTree = function () {

    var character = "";
    var radioSelection = document.getElementsByName('character');
    var treesize = document.getElementById('treeSize').value;


    //loop to find selected value
    for (x = 0; x < radioSelection.length; x++) {

        console.log("x:", x);

        if (radioSelection[x].checked) {
            character = radioSelection[x].value;
            break;
        }
    }

    var string = character;

    for (var q = 0; q < treesize; q++) {
        var string = whitespace + character;
        console.log(string);
        string += character;

        string = " " + string;
    }

}