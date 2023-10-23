"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Quiz = /** @class */ (function () {
    function Quiz(questions) {
        this.questions = questions;
        this.userAnswers = [];
    }
    Quiz.prototype.displayQuestion = function (index) {
        var _this = this;
        var currentQuestion = this.questions[index];
        console.log("Question ".concat(index + 1, ": ").concat(currentQuestion.question));
        currentQuestion.options.forEach(function (option, i) {
            console.log("".concat(i + 1, ". ").concat(option));
        });
        rl.question('Your answer: ', function (answer) {
            var parsedAnswer = parseInt(answer);
            if (isNaN(parsedAnswer) || parsedAnswer < 1 || parsedAnswer > currentQuestion.options.length) {
                console.log("Invalid answer. Please try again.\n");
                _this.displayQuestion(index);
            }
            else {
                _this.userAnswers.push(parsedAnswer);
                if (index < _this.questions.length - 1) {
                    _this.displayQuestion(index + 1);
                }
                else {
                    _this.showResult();
                    rl.close();
                }
            }
        });
    };
    Quiz.prototype.showResult = function () {
        var score = 0;
        for (var i = 0; i < this.questions.length; i++) {
            if (this.userAnswers[i] === this.questions[i].answer) {
                score++;
            }
        }
        console.log("You scored ".concat(score, " out of ").concat(this.questions.length, " questions."));
    };
    return Quiz;
}());
// Sample quiz questions related to Pakistan
var questions = [
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
var quiz = new Quiz(questions);
quiz.displayQuestion(0);
