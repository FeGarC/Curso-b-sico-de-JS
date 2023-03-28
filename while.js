var students = ["María", "Sergio", "Rosa", "Daniela"];

function helloStudents(student){
    console.log(`Hola, ${student}`);
}

while(students.length > 0){
    console.log(students)
    let student = students.shift();
    helloStudents(student);
}