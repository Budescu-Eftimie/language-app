import { useState } from "react";
import React from "react";

const Choice = ({ questions }) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const activeQuestion = questions[questionIndex];

    return (
        <fieldset>
            <h3 id="question">{activeQuestion.question.romana}</h3>

            <div className="choices">
                {questions.map((q) => (
                    <div
                        className="choice"
                        aria-checked="false"
                        name="rd1"
                        key={q.id}
                    >
                        {q.answer}
                        <input
                            type="radio"
                            aria-checked="false"
                            name="rd1"
                            id={q.id}
                        ></input>
                        <img src={q.image} alt="" />
                    </div>
                ))}
            </div>
        </fieldset>
    );
};

export default Choice;
