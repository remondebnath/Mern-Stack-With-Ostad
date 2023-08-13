function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) {
        console.log("Object is empty");
    } else {
        for (const property in obj) {
            console.log(`${property}: ${obj[property]}`);
        }
    }
}

const person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
};

printObjectProperties(person);
