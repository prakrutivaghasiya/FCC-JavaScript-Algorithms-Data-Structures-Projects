// Takes space seperated binary string and returns it's equivalent sentence! 

function binaryAgent(str) {
    // Split by space:
    var binary = str.split(" ");
    
    // Convert binary to ASCII value (i.e binary to decimal):
    var mappedASCII = binary.map(val => parseInt(val, 2))
    
    // Convert ASCII to its Character:
    var letters = mappedASCII.map(val => String.fromCharCode(val));
    
    // Join character array:
    var sentence = letters.join("");
    console.log(sentence);
    
    return sentence;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
// returns """ Aren't bonfires fun!? """