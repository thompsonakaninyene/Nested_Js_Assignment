class Student {
    constructor(name, age, discipline) {
        this.name = name;
        this.age = age;
        this.discipline = discipline;
        this.courses = [];
       
    }
    enroll(course){
        this.courses.push(course);
        console.log(`${this.name} enrolled in  ${course}`);
    }
    get Info(){
        return `${this.name}, ${this.age} years old, discipline: ${this.discipline}`;
    }
}

// Graduate 
class GraduateStudent {
    constructor(name, age, discipline, thesis) {
        this.name = name;
        this.age = age;
        this.discipline = discipline;
        this.thesis = thesis;
        this.isDefended = false;
    }
    defendThesis(){
        if (this.isDefended) {
console.log(`${this.name} shas already defended his/her thesis`);
            return;
        }
        this.isDefended = true;
        console.log(`${this.name} successfully defended his/her thesis: ${this.thesis}`)
    }
}
let undergraduate = new Student(prompt(`Enter your name \n  discipline ` ));
undergraduate.enroll(prompt("Enter your course"));

let graduate = new GraduateStudent("Akan", 24, "AI");
undergraduate.enroll("Advance machine Learning");
graduate.defendThesis();
// console.log(graduate.getInfo());

