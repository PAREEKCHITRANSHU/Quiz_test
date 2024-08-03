import React, { useState } from "react";

function Question({ questions, currentQuestionIndex, handleAnswer }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleSelection = (choice) => {
        setSelectedAnswer(choice);
    };

  return (
      <div >
        <h1 className="flex justify-center items-center pb-40 font-serif text-4xl font-bold  ">Welcome to Quizera</h1>
        <div className="question p-6 bg-white shadow-md rounded-md  border-t-4 border-gray-500">
            <h2 className="text-xl font-bold mb-4">{questions[currentQuestionIndex].question}</h2>
            {questions[currentQuestionIndex].choices.map((choice, index) => (
                <div key={index} className="mb-2">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            value={choice}
                            checked={selectedAnswer === choice}
                            onChange={() => handleSelection(choice)}
                            className="mr-2"
                        />
                        {choice}
                    </label>
                </div>
            ))}
            <div className="mt-4">
                <button
                    onClick={() => handleAnswer(selectedAnswer)}
                    disabled={!selectedAnswer}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
                >
                    Submit
                </button>
            </div>
        </div>
      </div>
    );
}

export default Question;
