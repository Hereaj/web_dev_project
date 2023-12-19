const hobbies = ['coding', 'sleeping'];

hobbies.push('playing');

console.log(hobbies);

const person = {age: 32};

function getAdultYear(p) {
    p.age -= 18;
    return p.age;
    //return p.age - 18;
}

// 복사
console.log(getAdultYear({ age: person.age }));
console.log(getAdultYear({...person}));
console.log(person);