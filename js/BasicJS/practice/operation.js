// Math

let age = 38;
let username = "AJ";
let cars = ["Range Rover", "Defender", "Rav4 Hybrid", "Model Y"];
let job = {
    title: "Developer",
    age: 30,
    place: "Seattle",
    salary: 50000
};

function calculateAdultYear(userAge) {
    return userAge - 18;
}

let ajadultyear = calculateAdultYear(age);
let adultYear = calculateAdultYear(job.age);


let person = {
    name: "AJ", // property
    greet() { // method
        alert("hello!");
    }
}

console.log(person.name);
console.log(calculateAdultYear(job.age));

console.log(10 + 4);
console.log(10-4);
console.log(2424/3);
console.log(2424/7);
console.log(31%10);

console.log("AJ" + " " + "Seohyeon");

let name = "seohyeon";

console.log(name.length);
console.log(name.toUpperCase());

let arr = [1, 2, 3, 4, 5];

console.log(arr.length);
console.log(arr.push(6));
console.log(arr.push(8));
console.log(arr);