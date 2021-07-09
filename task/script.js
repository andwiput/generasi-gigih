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

//Promise Avg
const promiseHandler = () => {
  return new Promise((resolve,reject) => {
    console.log("calculation start");
    console.log("second call started");

    setTimeout(()=>{
      console.log("second call finished");
      console.log("third call started");
      return setTimeout(()=>{
        console.log("third call finished");
        return resolve();
      },3000);
    },2000);
  });
};

const btn = document.getElementById("calbtn");

//function ketika button clicked
btn.onclick = () => {
  const calAvgAge = avgAge(students);
  promiseHandler()
  .then((res)=>{
    console.log(calAvgAge);
    document.getElementById("avg").innerHTML = calAvgAge;
  })  
};