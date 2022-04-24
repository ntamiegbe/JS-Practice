const arr = [1,2,3,4,5,6,7,8];

function findMiddle(target, start, end) {

    if (start > end) {
        return "Target not found";
    }

    const middle = Math.floor((start + end ) /2);

    if(arr[middle] === target) {
        return `Found at ${middle}`;
    }

    if(arr[middle] > target) {
        return findMiddle(target, start, middle-1);
    }

    if(arr[middle] > target) {
        return findMiddle(target, middle + 1, end);
    }

}

console.log(findMiddle(6, 1, 7));