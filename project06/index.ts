class Student {
    static idCounter: number = 1000;
    name: string;
    studentID: string;
    courses: string[];
    balance: number;

    constructor(name: string, courses: string[]) {
        this.name = name;
        this.studentID = String(Student.idCounter);
        Student.idCounter++;
        this.courses = courses;
        this.balance = 5000;
    }

    enroll(course: string) {
        this.courses.push(course);
    }

    viewBalance() {
        console.log(`Balance for ${this.name} is $${this.balance}`);
    }

    payTuition(amount: number) {
        this.balance -= amount;
        console.log(`Paid $${amount} for ${this.name}`);
    }

    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Courses Enrolled: ${this.courses}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Usage
const student1 = new Student("Shahzaib Samo", ["Math", "Science"]);
student1.enroll("History");
student1.viewBalance();
student1.payTuition(500);
student1.showStatus();
