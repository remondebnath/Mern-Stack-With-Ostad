// qus1?in javascript  create  a function that accept an array and return the last item of array. \
function getLastItem(arr){
    return arr[arr.length - 1];

}
// console.log(getLastItem([1,2,3]))
// console.log(getLastItem(["cat", "dog", "duck"]) )


// Qus2Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr){
    if(arr)

    return arr[0]

}



// qus3

    function isEmpty(str) {
        return str.trim() === '';
      }
      
    //   console.log(isEmpty(""));
    //   console.log(isEmpty(" "))
    //   console.log(isEmpty("a"))


    //   qus4

    function remainder(a, b) {
        return a % b;
      }
    //   console.log(remainder(10, 3));
    //   console.log(remainder(17, 5));
    //   console.log(remainder(5, 5));


    
    //   qus5Create a function that finds the index of a given item.

    function search(index,item){
        return index.indexOf(item);
    }

    // console.log(search([1, 5, 3], 5))
    // console.log(search([9, 8, 3], 3))
    // console.log(search([1, 2, 3], 4))

// qus6
// qus7 Create a function that takes an array of numbers and returns the smallest number in the set.
function findSmallNum(arr){
    let sortedNum=arr.sort((a,b)=>{return (a-b)})
    let smallnum=sortedNum[0]
    return smallnum;
    
}
// console.log(findSmallNum([34, 15, 88, 22]))

// qus8 Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

