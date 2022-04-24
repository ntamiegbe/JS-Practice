
// The Fibonacci Sequence i.e 0,1,1,2,3,5,8,13,21,34,55,89 e.t.c

// Without Recursion
const fibonacci = (numberOfSequence, array = [0,1]) => {
    while (numberOfSequence > 2) {
        const [nextToLast, last] = array.slice(-2);
        array.push(nextToLast + last);
        numberOfSequence -= 1;
    }
    return array;
}

console.log(fibonacci(10));

// With Recursion 
const fibWithRecursion = (numberOfSequence, array = [0,1]) => {
    if (numberOfSequence <= 2) return array;
    const [nextToLast, last] = array.slice(-2);
    // We used to spread operator to add the last two digits to the end of the array
    return fibWithRecursion(numberOfSequence -1, [...array, nextToLast + last]);
}

console.log(fibWithRecursion(15));

//Finding the nth position of the fibonacci sequence

//Without Recursion
const fibonacciPosition = (position) => {
    if (position <= 1) return position;
    const sequence = [0,1];
    for (let i = 2; i <= position; i++) {
        const [nextToLast, last] = sequence.slice(-2);
        sequence.push(nextToLast + last);
    }
    return sequence[position];
}

console.log(fibonacciPosition(6));