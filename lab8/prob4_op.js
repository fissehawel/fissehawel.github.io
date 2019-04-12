const Person = {
    name: "Unknown",
    age: "unknown",
    greet: function(){
        console.log("Greetins, my name is " + this.name + " and I am " + this.age + " years old.");
    },
    salute: function(){
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
};

const Student = function(name, age, major){
    Person.name = name;
    Person.age = age;
    const Student = Object.create(Person);
    Student.major = major;
    Student.greet = function(){
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
    }
    return Student;
};

const Professor = function(name, age, department){
    Person.name = name;
    Person.age = age;
    const Professor = Object.create(Person);
    Professor.department = department;
    Professor.greet = function(){
        console.log("Good day, my name is " + this.name + " and I am in the  " + this.department + " department");
    }
    return Professor;
};

