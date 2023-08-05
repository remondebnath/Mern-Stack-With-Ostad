function swapValues(a, b) {
    // Temporary variable to hold the value of 'a'
    const temp = a;

    // Assign the value of 'b' to 'a'
    a = b;

    // Assign the value of the temporary variable to 'b'
    b = temp;

    // Return the updated values of 'a' and 'b'
    return [a, b];
}

function main(input) {
    const [a, b] = input.trim().split(' ').map(Number);

    console.log(`Before swapping: num1 = ${a}, num2 = ${b}`);

    const [newA, newB] = swapValues(a, b);

    console.log(`After swapping: num1 = ${newA}, num2 = ${newB}`);
}

process.stdin.on('data', data => {
    main(data.toString());
});
