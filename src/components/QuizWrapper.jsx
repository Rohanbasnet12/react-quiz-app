import React from "react";
import "./QuizWrapper.css";

const QuizWrapper = () => {
  return (
    <div id="quiz">
      <div
        id="background-wraper"
        className="w-full h-screen flex items-center justify-center"
      >
        <div id="quiz-wrapper"></div>
      </div>
    </div>
  );
};

export default QuizWrapper;
