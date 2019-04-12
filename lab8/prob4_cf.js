// Person Function Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log("Greetins, my name is " + this.name + " and I am " + this.age + " years old.");
}
Person.prototype.salute = function(){
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
}

// Student Function Constructor
function Student(name, age, major){
    Person.call(this, name, age);
    this.major = major;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.greet = function(){
    console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
}

// Professor Function Constructor
function Professor(name, age, department){
    Person.call(this, name, age);
    this.department = department;
};
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.greet = function(){
    console.log("Good day, my name is " + this.name + " and I am in the  " + this.department + " department");
}