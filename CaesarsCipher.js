// What is Caesars Cipher : 
// One of the simplest and most widely known ciphers is a Caesar cipher, 
// also known as a shift cipher. In a shift cipher the meanings of the letters are shifted
// by some set amount.

// A common modern use is the ROT13 cipher,
// where the values of the letters are shifted by 13 places.
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// This function is only for capital letters:

function rot13(str) {
    var letters = str.split("")
    // Converting characters to its ASCII value!
    var corresASCII = letters.map(letter => letter.charCodeAt())

    var char = []
    for (var i = 0; i < corresASCII.length; i++) {
        // if the value is other than A-Z (capitals) then don't cipher it! (i.e. return as it is)
        if (corresASCII[i] < 65 || corresASCII[i] > 90) 
        {
            char.push(String.fromCharCode(corresASCII[i]));
        }
        // for values between 65-90 i.e. A-Z
        // if value is less than 78 i.e middle alphabet of A-Z then add 13 to it's ASCII value
        else if (corresASCII[i] < 78) {
            char.push(String.fromCharCode(corresASCII[i] + 13));
        }
        // if value is greater than or equal-to 78 i.e middle alphabet of A-Z 
        // then subtract 13 to it's ASCII value
        else if (corresASCII[i] >= 78) {
            char.push(String.fromCharCode(corresASCII[i] - 13));
        }
    }

    var string = char.join("")
    return string;
}

console.log(rot13("GUNAXLBH...")); // prints THANKYOU
console.log(rot13("URL! LBH NER YBBXVAT NG RAPBQRQ GRKG!..")) 
// prints HEY! YOU ARE LOOKING AT ENCODED TEXT!..