// Valid US telephone number formats are:
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

function UStelephoneCheck(str) {

    var regex = /^(+?1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    if (regex.test(str)) return true
    else return false
}

// Valid Indian telephone number formats are:
// AAAAA-BBBBB
// AAAAA BBBBB
// 91 AAAAA-BBBBB
// +91 AAAAA BBBBB
// +91 AAAAA-BBBBB
// +91AAAAABBBBB

function IndiantelephoneCheck(str) {

    var regex = /^(+?91\s?)?\d{5}[\s-]?\d{5}$/;

    if (regex.test(str)) return true
    else return false
}

console.log(UStelephoneCheck("1 555 555 5555")); // prints true
console.log(UStelephoneCheck("2 (757) 622-7382")); // prints false

console.log(IndiantelephoneCheck("+91 88888 99999")) // prints true
console.log(IndiantelephoneCheck("9 4532 231 724")); // prints false