"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var PersonalityType;
(function (PersonalityType) {
    PersonalityType[PersonalityType["Introvert"] = 1] = "Introvert";
    PersonalityType[PersonalityType["Extrovert"] = 2] = "Extrovert";
    PersonalityType[PersonalityType["Mysterious"] = 3] = "Mysterious";
})(PersonalityType || (PersonalityType = {}));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.personality = PersonalityType.Introvert; // default personality
    }
    Person.prototype.setPersonality = function (personality) {
        this.personality = personality;
    };
    Person.prototype.getPersonality = function () {
        switch (this.personality) {
            case PersonalityType.Introvert:
                return "Introvert";
            case PersonalityType.Extrovert:
                return "Extrovert";
            case PersonalityType.Mysterious:
                return "Mysterious";
            default:
                return "Unknown";
        }
    };
    return Person;
}());
var person = new Person("");
rl.question('Please enter your name: ', function (name) {
    person.name = name;
    console.log("Welcome, ".concat(person.name, "! Please select your personality type:"));
    console.log("1. Introvert");
    console.log("2. Extrovert");
    console.log("3. Mysterious");
    rl.question('Your choice: ', function (choice) {
        var selectedOption = parseInt(choice);
        if (selectedOption >= 1 && selectedOption <= 3) {
            person.setPersonality(selectedOption);
            console.log("".concat(person.name, ", you have a ").concat(person.getPersonality(), " personality."));
        }
        else {
            console.log('Invalid choice. Please select a valid option.');
        }
        rl.close();
    });
});
