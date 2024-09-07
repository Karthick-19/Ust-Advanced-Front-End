var Firstname = "Karthi";
console.log(Firstname);
var loc = "Salem";
var pincode = 695582;
var date = new Date();
var language;
language = [2, 4, 1, 5, 7];
// console.log(typeof(language))
console.log(loc);
console.log(pincode);
console.log(date);
console.log(language);
// let age = prompt("Enter your age")
var age = 19;
var op = age > 18 ? "You can vote" : isNaN(age) ? "Enter proper input" : "Go home kiddo";
console.log(op);
var factorial = function (f) {
    if (f <= 1) {
        return 1;
    }
    return f * factorial(f - 1);
};
console.log(factorial(5));
var fibonacci = function (f) {
    if (f <= 1) {
        return f;
    }
    return fibonacci(f - 1) + fibonacci(f - 2);
};
console.log(fibonacci(10));
var person = {
    data: [
        { "Name": "Mike", "Age": 24, "Occupation": "Web Designer", "Country": "Albania" },
        { "Name": "Jane", "Age": 21, "Occupation": "Software Engineer", "Country": "Spain" },
        { "Name": "Ricky", "Age": 22, "Occupation": "Professional Footballer", "Country": "Australia" }
    ]
};
// console.log(person.data.forEach)
// console.log(person)
person.data.forEach(function (d) {
    d.MaritalStatus = "Single";
});
console.log(person);
// let dataFilter = person.data.filter()
var add = function (a, b, c) {
    if (b === void 0) { b = 10; }
    //overridden and c is optional 
    console.log(a + b);
};
var pet = {
    "type": "Dog",
    "name": "Bruno",
    "Breed": "Labrador",
};
var x = true; //it coulb be of any of the types mentioned in myTyoe
var y = 199;
var Student = /** @class */ (function () {
    function Student(studentId, firstName, age) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.age = age;
    }
    Student.prototype.printRecord = function () {
        console.log(this.studentId, this.firstName, this.age);
    };
    return Student;
}());
var student1 = new Student(101, "Rick", 19);
var student2 = new Student(102, "Mike", 20);
var student3 = new Student(103, "Odin", 18);
