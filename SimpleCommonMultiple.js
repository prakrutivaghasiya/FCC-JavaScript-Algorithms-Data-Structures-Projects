// Finds LCM of the given range!

function smallestCommons(arr) {
    // Sorting arr in ascending order :
    arr.sort((a, b) => a - b);
    // Setting min and max value :
    let min = arr[0];
    let max = arr[1];
    // For holding all the values between min and max :
    var values = [];

    // Pushing the values to the array :
    while (min <= max) {
        values.push(min);
        min++;
    }

    // Function for GCD - Greatest Common Divisor using Euclidean algorithm : Simple formula : gcd(a,b) => a = x * b + remainder 
    // Example: gcd(24,15) : gcd(a,b) following the above formula:
    //  24 = 1 * 15 + 9
    //  15 = 1 * 9 + 6
    //  9 = 1 * 6 + 3
    //  6 = 2 * 3 + 0
    // As now remainder gets 0, we will take the current value of b (In this case 3) as gcd(a,b) :

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    // Function to find LCM - Least Common Multiple using gcd:
    const lcm = (a, b) => (a * b) / gcd(a, b);

    // Applying reduce method to array of values: 
    // LCM(1,2,3) = LCM( LCM(1,2), 3)

    return values.reduce((value, value1) => lcm(value, value1));
}


console.log(smallestCommons([1, 5]));
