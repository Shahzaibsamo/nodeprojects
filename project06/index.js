var Student = /** @class */ (function () {
    function Student(name, courses) {
        this.name = name;
        this.studentID = String(Student.idCounter);
        Student.idCounter++;
        this.courses = courses;
        this.balance = 5000;
    }
    Student.prototype.enroll = function (course) {
        this.courses.push(course);
    };
    Student.prototype.viewBalance = function () {
        console.log("Balance for ".concat(this.name, " is $").concat(this.balance));
    };
    Student.prototype.payTuition = function (amount) {
        this.balance -= amount;
        console.log("Paid $".concat(amount, " for ").concat(this.name));
    };
    Student.prototype.showStatus = function () {
        console.log("Name: ".concat(this.name));
        console.log("Student ID: ".concat(this.studentID));
        console.log("Courses Enrolled: ".concat(this.courses));
        console.log("Balance: $".concat(this.balance));
    };
    Student.idCounter = 1000;
    return Student;
}());
// Usage
var student1 = new Student("Shahzaib Samo", ["Math", "Science"]);
student1.enroll("History");
student1.viewBalance();
student1.payTuition(500);
student1.showStatus();
