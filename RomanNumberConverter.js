// Converts integer values to roman number: 
// Romans Numerals are based on the following symbols: 
// 1000 - M     100 - C     10 - X
// 500 - D      50 - L      5 - V

// A symbol is not repeated for more than 3 times!

// Example: Break 2121 into 2000, 100, 20 and 1, then do each conversion
// 2000 = 1000 + 1000 =MM
// 100 = C
// 20 = 10 + 10 = XX
// 1 = I
// 2000 + 100 + 20 + 1 = 2121, so 2121 = MMCXXI

function convertToRoman(num) {
    // Converting number into single digit: eg: 345 to 3, 4, and 5!
    var digits = []
    while (num) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }

    // Multiply proper tens or hundreds or thousands to single digits. So the number breaks
    // Eg: 345 into 300, 40, and 5
    var expandedNum = [];
    var x = 1;
    for (var digit in digits) {
        expandedNum.push(digits[digit] * x)
        x *= 10;
    }
    expandedNum.reverse();

    // Some important base-roman dictionary values:
    var romandict = { 1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I' }
    // Storing the integers from romandict and sorting in descending order as dictionary saves values in ascending order by default.
    var decimals = Object.keys(romandict).sort((a, b) => b - a);

    var romanNumber = ''

    for (var i in expandedNum) {
        for (var j in decimals) {
            while (decimals[j] <= expandedNum[i]) {
                romanNumber += romandict[decimals[j]];
                expandedNum[i] -= decimals[j];
            }
        }
    }
    return romanNumber
}

console.log(convertToRoman(12)); // prints XII
console.log(convertToRoman(2020)) // prints MMXX
convertToRoman(83) // returns LXXXIII
convertToRoman(501) // returns DI
convertToRoman(798) // returns DCCXCVIII
convertToRoman(3999) // returns MMMCMXCIX
