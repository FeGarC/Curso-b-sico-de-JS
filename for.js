var students = ["Maria", "Sergio", "Rosa", "Daniel"];

function helloStudents (student) {
    console.log(`Hola, ${student}`);
}

for(var i = 0; i < students.length; i++){
    helloStudents(students[i])
}