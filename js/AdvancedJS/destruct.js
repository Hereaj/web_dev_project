const name = ["jaehyeon", "ahn"];

const [firstname, lastname] = name;

console.log(firstname);
console.log(lastname);

const job = {
    title: "Developer",
    location: "New York",
    salary: 50000,
};

const {title:jobname, location:city} = job;

console.log(jobname);
console.log(city);