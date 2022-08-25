const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion()
}

function showQuestion(question) {
    questionElement.innerText =question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
}

const question = [
    {
        question: 'What does HTML stand for?',
        answers: [
            {text: 'Hyper Text Markup Language', correct: true},
            {text: 'Hot Tango Malasad Licorice', correct: false},
            {text: 'Hyper Talking Music Latitude', correct: false},
            {text: 'Hey Tomorrow Means Lazyday', correct: false}
        ]
    },
    {
        question: 'Where should a CSS file be referenced in a HTML file?',
        answers: [
            {text: 'Inside the head section', correct: true},
            {text: 'Anywhere that feels right', correct: false},
            {text: 'Inside the footer section', correct: false},
            {text: 'Inside every div', correct: false}
        ]
    },
    {
        question: 'Inside which HTML element do we put the Javascript?',
        answers: [
            {text: '<js>', correct: false}, 
            {text: '<div>', correct: false},
            {text: '<script>', correct: true},
            {text: '<hot java>>', correct: false}
        ]
    },
    {
        question: 'How do you create a function in Javascript?',
        answers: [
            {text: 'function:myfunction:start', correct: false},
            {text: 'function = myFunction()', correct: true},
            {text: '<function class=work></function>', correct: false},
            {text: 'form over function', correct: false}
        ]
    },
    {
        question: 'Who is the best student?',
        answers: [
            {text: 'Tierney', correct: true},
            {text: 'Everyone in class', correct: true},
            {text: 'Everyone who has ever tried to learn coding', correct: true},
            {text: 'Nobody', correct: false}
        ]
    }
]