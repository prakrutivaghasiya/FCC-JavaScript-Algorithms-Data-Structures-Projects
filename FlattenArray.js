// Flatten array with any level of nesting 
// without using Array.prototype.flat() or 
// Array.prototype.flatMap() methods!

function steamrollArray(arr) {
    var flattenArray = [];

    function flatArray(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].constructor == Array) flatArray(array[i]);
            else flattenArray.push(array[i]);
        }
        return 0;
    }

    flatArray(arr);
    return flattenArray;
}

steamrollArray([1, [2], [3, [[4]]]]); 
// returns [1,2,3,4]

steamrollArray([1, {}, [3, [[4]]]]);
// returns [1,{},3,4]