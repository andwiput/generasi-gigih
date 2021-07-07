const students = [
  {name: "Jack", age: 24},
  {name: "Fred", age: 25},
  {name: "Ken", age: 23},
  {name: "Bill", age: 25},
  {name: "Matt", age: 27},
];

//buat tabel
const createTable = () => {
    students.forEach(({name, age}) => {
        const table = document
        .getElementById("data");

        table.insertRow().innerHTML = `<td>${name}</td><td>${age}</td>`
    });
};

//panggil tabel
createTable();

//function untuk hitung average age of students
const avgAge = (students) => {
    const totAge = students.reduce((acc, student) => acc + student.age, 0);
    return totAge / students.length;
};

//function ketika button clicked
const handleClick = () => {
  const calAvgAge = avgAge(students);
  document.getElementById("avg").innerHTML = calAvgAge;
};

//eventlistener onclick
document.getElementById("calbtn").addEventListener("click",handleClick);

