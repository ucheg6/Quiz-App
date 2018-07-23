// Questions for the quiz app
var questions = [{
    "question": "Who is Andela's President?",
    "option1": "Seni Sulyman",
    "option2": "Evan Green-Lowe",
    "option3": "Christina Sass",
    "option4": "Jeremy Johnson",
    "answer": "3"
}, {
    "question": "Who is Andela's V.P of Global Operations?",
    "option1": "Evan Green-Lowe",
    "option2": "Seni Sulyman",
    "option3": "Christina Sass",
    "option4": "Jeremy Johnson",
    "answer": "2"
}, {
    "question": "Which of these Andela's EPIC Values is wrongly spelt?",
    "option1": "Excellence",
    "option2": "Passion",
    "option3": "Integrity",
    "option4": "Collaborration",
    "answer": "4"
}, {
    "question": "Who is Andela's CEO?",
    "option1": "Jeremy Johnson",
    "option2": "Evan Green-Lowe",
    "option3": "Christina Sass",
    "option4": "Nadayar Enegesi",
    "answer": "1"
}, {
    "question": "What is the full meaning of this Andela's acronym YOYO?",
    "option1": "You only you only",
    "option2": "Yeast off yesterdays own",
    "option3": "You own your own",
    "option4": "Yes oh yes oh",
    "answer": "3"
}, {
    "question": "The original Starbucks was established in 1971 in what U.S. city?",
    "option1": "Los Angeles, California",
    "option2": "Orlando, Florida",
    "option3": "Seattle, Washington",
    "option4": "Dallas, Texas",
    "answer": "3"
}, {
    "question": "What do the letters in the acronym CD-ROM stand for?",
    "option1": "Compact Disk Recorded On Memory",
    "option2": "Compact Disk Read Only Memory",
    "option3": "Who Cares We Have DvD's Now!",
    "option4": "Compact Disk Ready On Memory",
    "answer": "2"
}, {
    "question": "In 1975 an engineer created the first electronic camera while working for what company?",
    "option1": "Microsoft",
    "option2": "IBM",
    "option3": "Polaroid",
    "option4": "Kodak",
    "answer": "4"
}, {
    "question": "Nintendo is a consumer electronics and video game company founded in what country?",
    "option1": "China",
    "option2": "South Korea",
    "option3": "Japan",
    "option4": "United States",
    "answer": "3"
}, {
    "question": "Which planet in our solar system has an axis that is titled by 98 degrees?",
    "option1": "Uranus",
    "option2": "Saturn",
    "option3": "Mars",
    "option4": "Mercury",
    "answer": "1"
}];


// variable declarations
let currentQuestion = 0;
let score = 0;
const totalQuestions = questions.length;

const container = document.getElementById('quizContainer');
const questionContainer = document.getElementById('question');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');
const nextButton = document.getElementById('nextButton');
const resultContainer = document.getElementById('result');
const questionCount = document.getElementById('question-count');


//function responsible for loading questions and options
function loadQuestion (questionIndex) {
    questionCount.textContent = `Question ${questionIndex + 1} of ${totalQuestions} `;
	let q = questions[questionIndex];
	questionContainer.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
    opt4.textContent = q.option4;

}

function loadNextQuestion() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
    var answer = selectedOption.value;
    
	if(questions[currentQuestion].answer == answer){
        score += 10;
 
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totalQuestions - 1){
        nextButton.value = 'Submit';
   
	}
	if(currentQuestion == totalQuestions){
        container.style.display = 'none';
		resultContainer.style.display = '';
        resultContainer.textContent = 'Your Score: ' + score;
        return;
    }
   
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

