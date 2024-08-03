import React, { useState } from "react";
import Question from "./components/Question";
import Results from "./components/Results";
import "./App.css";

const questions = [
    {
        question: "What is the capital of india?",
        choices: ["delhi", "jaipur", "chennai", "nepal"],
        correctAnswer: "delhi",
    },
    {
        question: "What is 2*4?",
        choices: ["3", "4", "8", "6"],
        correctAnswer: "8",
    },
];

function App() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (selectedAnswer) => {
        if (selectedAnswer !== null) {
            const isCorrect = selectedAnswer === questions[currentQuestionIndex].correctAnswer;
            if (isCorrect) {
                setScore(score + 1);
            }
            setAnswers([
                ...answers,
                {
                    question: questions[currentQuestionIndex].question,
                    answer: selectedAnswer,
                    correct: isCorrect,
                },
            ]);

            const nextQuestionIndex = currentQuestionIndex + 1;
            if (nextQuestionIndex < questions.length) {
                setCurrentQuestionIndex(nextQuestionIndex);
            } else {
                setShowResults(true);
            }
        } else {
            const nextQuestionIndex = currentQuestionIndex + 1;
            if (nextQuestionIndex < questions.length) {
                setCurrentQuestionIndex(nextQuestionIndex);
            } else {
                setShowResults(true);
            }
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResults(false);
        setAnswers([]);
        
    };

    return (
        <div className="App p-6 bg-gray-100 min-h-screen flex items-center justify-center">
            {showResults ? (
                <Results
                    score={score}
                    totalQuestions={questions.length}
                    answers={answers}
                    questions={questions}
                    onRestart={handleRestart}
                />
            ) : (
                <>
                    <ProgressBar
                        current={currentQuestionIndex + 1}
                        total={questions.length}
                    />
                    <Question
                        questions={questions}
                        currentQuestionIndex={currentQuestionIndex}
                        handleAnswer={handleAnswer}
                    />
                </>
            )}
        </div>
    );
}

export default App;
