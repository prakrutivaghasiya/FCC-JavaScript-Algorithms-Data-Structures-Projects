// Checks whether the string is palindrome or not after removing all the non-alphanumeric characters

function palindrome(str) {
    // regex for removing non-alphanumeric characters
    var regex = /[\W_]/g;
    var newStr = str.replace(regex, "").toLowerCase();

    // reversing the new string after converting it to array of single characters 
    // and joining to get string again
    var reversedStr = newStr.split("").reverse().join("");

    if (newStr == reversedStr) return true;
    else return false;
}



palindrome("eye");
// returns true
