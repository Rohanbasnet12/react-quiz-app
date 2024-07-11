import React from "react";
import Background from "./Background/Background";

const QuizWrapper = () => {
  return (
    <>
      <Background />
      <div id="quiz">
        <div
          id="quiz-wrapper"
          className="w-full h-screen flex items-center justify-center"
        >
          <h1 className="text-5xl font-extrabold text-blue-400">
            Quizify Start learning...
          </h1>
        </div>
      </div>
    </>
  );
};

export default QuizWrapper;
