// Inheritance using constructor function
// Person constructor function
function Person(name){
    this.name = name;
    console.log(this);
}
// Teacher Constructor Function created from the Person constructor function.
const Teacher = function(name){
    Person.call(this, name);
}
// Make Teacher() to inherit the methods defined on Person()'s prototype.
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function(subject){
    console.log(this.name + " is now teaching " + subject)
}

cost teacher = new Teacher("Tina");
teacher.name;
teahcer.teach("WAP");
