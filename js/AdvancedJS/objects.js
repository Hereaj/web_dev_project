/* const job = {
    title: "Developer",
    location: "New York",
    salary: 50000,
}; */

class job {
  constructor(jobtitle, place, salary) {
    this.title = jobtitle;
    this.location = place;
    this.salary = salary;
  }

  tellme() {
    console.log(
      `I'm ${this.title} and I work in ${this.location}. I make $${this.salary} per year.`
    );
  }
}

const dev = new job("dev", "Seattle", 50000);
const cook = new job("cook", "Los Angeles", 50000);
console.log(dev);
dev.tellme();
cook.tellme();
