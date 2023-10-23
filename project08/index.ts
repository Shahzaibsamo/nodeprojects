import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Quiz {
    questions: { question: string; options: string[]; answer: number }[];
    userAnswers: number[];

    constructor(questions: { question: string; options: string[]; answer: number }[]) {
        this.questions = questions;
        this.userAnswers = [];
    }

    displayQuestion(index: number) {
        const currentQuestion = this.questions[index];
        console.log(`Question ${index + 1}: ${currentQuestion.question}`);
        currentQuestion.options.forEach((option, i) => {
            console.log(`${i + 1}. ${option}`);
        });

        rl.question('Your answer: ', (answer) => {
            const parsedAnswer = parseInt(answer);
            if (isNaN(parsedAnswer) || parsedAnswer < 1 || parsedAnswer > currentQuestion.options.length) {
                console.log("Invalid answer. Please try again.\n");
                this.displayQuestion(index);
            } else {
                this.userAnswers.push(parsedAnswer);
                if (index < this.questions.length - 1) {
                    this.displayQuestion(index + 1);
                } else {
                    this.showResult();
                    rl.close();
                }
            }
        });
    }

    showResult() {
        let score = 0;
        for (let i = 0; i < this.questions.length; i++) {
            if (this.userAnswers[i] === this.questions[i].answer) {
                score++;
            }
        }
        console.log(`You scored ${score} out of ${this.questions.length} questions.`);
    }
}

// Sample quiz questions related to Pakistan
const questions = [
    {
        question: "What is the capital of Pakistan?",
        options: ["Lahore", "Islamabad", "Karachi", "Peshawar"],
        answer: 2 // Islamabad
    },
    {
        question: "Which river is known as the 'Soul of Sindh'?",
        options: ["Chenab", "Ravi", "Indus", "Jhelum"],
        answer: 3 // Indus
    },
    {
        question: "Which mountain range is located in the northern areas of Pakistan?",
        options: ["Himalayas", "Karakoram", "Hindu Kush", "Sulaiman"],
        answer: 2 // Karakoram
    }
];

// Initialize and start the quiz
const quiz = new Quiz(questions);
quiz.displayQuestion(0);
