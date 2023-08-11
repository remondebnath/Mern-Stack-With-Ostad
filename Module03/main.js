// 1) Write a JavaScript function named maxNumber that takes any number of arguments and returns the maximum number among them using the spread operator.
function maxNumber(...numbers) {
    return Math.max(...numbers);
}

console.log(maxNumber(5, 10, 3, 7));
console.log(maxNumber(2, 8, 4));  

// 2) Write a JavaScript function named concatStrings that takes any number of string arguments and returns a single string that concatenates all the input strings together using the rest parameter.
function concatStrings(...strings){
   return strings.join('')
}
console.log(concatStrings("Hello", " ", "World"));
console.log(concatStrings("I", " ", "love", " ", "JavaScript"));
// 3) Write a JavaScript function named sumArray that takes an array of numbers as an argument and returns the sum of all the numbers using the for...of loop.

function sumArray(x){
    let sum=0
    for(let i of x){
        sum+=i
    }
    return sum;
}
console.log(sumArray([1, 2, 3]));
console.log(sumArray([5, 10, 2, 3])); 

// 4) Create a JavaScript function named createPerson that takes three parameters: name, age, and occupation. The function should return an object representing a person with the given properties.

// Example:

// conole.log(person1); // Output: { name: "John", age: 30, occupation: "Engineer" }
function createPerson(name,age,occupation){
    return{
        name:name,
        age:age,
        occupation:occupation
    }
}
const person1 = createPerson("John", 30, "Engineer");
console.log(person1); 

// 5) Create a JavaScript function named getEvenNumbers that takes an array of numbers as an argument and returns a new array containing only the even numbers using an arrow function.

const getEvenNumbers = numbers => numbers.filter(number => number % 2 === 0);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbers);

console.log(evenNumbers); 
// 6) Create a JavaScript function named getFirstAndLast that takes an array of numbers as an argument and returns an object containing the first and last numbers of the array using array destructuring.

const getFirstAndLast = numbers => {
    const [first, ...rest] = numbers;
    const last = rest.pop();
    return { first, last };
};

const numbers = [1, 2, 3, 4, 5];
const { first, last } = getFirstAndLast(numbers);

console.log(first); // Output: 1
console.log(last); // Output: 5





// 7) Create a JavaScript class named Rectangle with a constructor that takes two parameters: width and height. The class should have methods to calculate the area of the rectangle.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const rectangle1 = new Rectangle(4, 5);

console.log(rectangle1.getArea());