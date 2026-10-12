function rectangleArea(length = 5, width = 4) {
    return length * width;
}

console.log("Default Rectangle Area: " + rectangleArea());
console.log("Custom Rectangle Area: " + rectangleArea(10, 3));

const calculateArea = (length, width) => length * width;

console.log("Arrow Function Area: " + calculateArea(6, 4));

if (true) {
    let message = "This variable is inside the block";
    console.log(message);
}

console.log(message);