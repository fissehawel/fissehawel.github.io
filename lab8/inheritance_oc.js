// Inheritance using Object.create
const Person = {
    name: "Unknown",
    log: function(){
        console.log(this);
    }
}

// Create sub-class
const Teacher = function(name) {
    let teacher = Object.create(Person);
    Person.name = name;
    teacher.teach = function(subject){
        console.log(this.name + " is now teaching " + subject);
    }
    return teacher;
};



