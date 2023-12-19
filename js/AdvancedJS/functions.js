function greetUser(username = "User") {
    console.log("Hi, " + username + "!");
}

greetUser("AJ");
greetUser();


// Unoptional first, optional last(what has default value)
function greetUser2(greetPrefix, username = "User") {
    //console.log(greetPrefix + ", " + username + "!");
    console.log(`${greetPrefix}, ${username}!`);
}

greetUser2("Hi", "AJ");
greetUser2("Good Morning");

// rest parameters
function sumUp(...numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}

const array = [1, 2, 3, 4, 5];

// spread operator
console.log(sumUp(...array));