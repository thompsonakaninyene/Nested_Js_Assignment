let studentNames = ["Akaninyene", "Abasianam", "Jackson", "Daniel", "Wonder", "Mirian", "Chukwuebuka", "Lawrence"];
console.log(studentNames);
//Add names

let addStudent = (name) => { studentNames.push(name);
    return studentNames;
}
console.log(addStudent(prompt("Add student name")));
//remove student
let removeStudent = (name) => {
    studentNames = studentNames.filter(student => student !== name)
}
removeStudent(prompt("Remove student name"))
console.log(studentNames);
//Find student name
function findStudent(name) {
    let found = studentNames.find(student => student === name)
    return found
}

console.log(findStudent(prompt("Enter your target name")))
//sort names alphabetically
let alphaNames = studentNames.sort((a,b) => {
    return a.localeCompare(b)
})
console.log(alphaNames)