import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

enum PersonalityType {
    Introvert = 1,
    Extrovert = 2,
    Mysterious = 3,
}

class Person {
    name: string;
    personality: PersonalityType;

    constructor(name: string) {
        this.name = name;
        this.personality = PersonalityType.Introvert; // default personality
    }

    setPersonality(personality: PersonalityType) {
        this.personality = personality;
    }

    getPersonality(): string {
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
    }
}

const person = new Person("");

rl.question('Please enter your name: ', (name) => {
    person.name = name;

    console.log(`Welcome, ${person.name}! Please select your personality type:`);
    console.log("1. Introvert");
    console.log("2. Extrovert");
    console.log("3. Mysterious");

    rl.question('Your choice: ', (choice) => {
        const selectedOption = parseInt(choice);
        if (selectedOption >= 1 && selectedOption <= 3) {
            person.setPersonality(selectedOption);
            console.log(`${person.name}, you have a ${person.getPersonality()} personality.`);
        } else {
            console.log('Invalid choice. Please select a valid option.');
        }
        rl.close();
    });
});
