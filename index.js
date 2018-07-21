// Questions for the quiz app
var questions = [{
    "question": "Which American inventor is generally given credit for the invention of the lightning rod?",
    "option1": "Nikola Tesla",
    "option2": "George Washington",
    "option3": "Benjamin Franklin",
    "option4": "Elijah McCoy",
    "answer": "3"
}, {
    "question": "Jimmy Carter was the first U.S. president born in a what?",
    "option1": "Air Plane",
    "option2": "Hospital",
    "option3": "Submarine",
    "option4": "Island",
    "answer": "2"
}, {
    "question": "In Disney's 'The Little Mermaid' what is the name of the human that Ariel falls in love with?",
    "option1": "King George",
    "option2": "Barry White",
    "option3": "Olaf The Snowman",
    "option4": "Prince Eric",
    "answer": "4"
}, {
    "question": "What is the name of the animated science fiction comedy-drama film released in 2002 about a Hawaiin girl and her unusual pet?",
    "option1": "Lilo & Stitch",
    "option2": "Moana",
    "option3": "How To Train Your Dragon",
    "option4": "Coraline",
    "answer": "1"
}, {
    "question": "How many mother sauces are there in classical French cuisine?",
    "option1": "Twenty",
    "option2": "Two",
    "option3": "Five",
    "option4": "Nine",
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


// Script to run game
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

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
	if(currentQuestion == totQuestions - 1){
        nextButton.value = 'Submit';
   
	}
	if(currentQuestion == totQuestions){
        container.style.display = 'none';
		resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

