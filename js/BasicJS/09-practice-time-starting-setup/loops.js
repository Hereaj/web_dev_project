for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["aj", "seo", "tori"];

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: "aj",
  age: 30,
  isAdmin: true
}

for (const key in loggedInUser) {
  console.log(key);
  console.log(loggedInUser[key]);
}


let isFinished = false;
while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}