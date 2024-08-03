import React from "react";

function Results({ score, totalQuestions, answers, questions, onRestart }) {
    return (
        <div className="results p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4">Quiz Complete!</h1>
            <p className="mb-4">
                Your score: {score} / {totalQuestions}
            </p>
            <h2 className="text-xl font-bold mb-2">Summary</h2>
            {answers.length > 0 ? (
                <ul className="summary mb-4">
                    {answers.map((answer, index) => {
                        const question = questions.find(
                            (q) => q.question === answer.question
                        );
                        return (
                            <li
                                key={index}
                                className={`mb-2 p-2 rounded ${answer.correct ? "bg-green-100" : "bg-red-100"}`}
                            >
                                <p>Question: {answer.question}</p>
                                <p>Your Answer: {answer.answer}</p>
                                <p>Correct Answer: {question ? question.correctAnswer : "Not Found"}</p>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>No answers to display.</p>
            )}
            <button onClick={onRestart} className="bg-blue-500 text-white px-4 py-2 rounded">
                Restart Quiz
            </button>
        </div>
    );
}

export default Results;
