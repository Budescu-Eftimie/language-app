import "./content.css";
import { useState } from "react";
import React from "react";

const Content = ({ questions }) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const activeQuestion = questions[questionIndex];

    return (
        <main>
            <fieldset>
                <p>
                    Do you know which criteria should be met for Google Assistant
                    to be able to read a page? Is it related to the structure of
                    the page, the domain name or something else?
                </p>
                <legend>{activeQuestion.question.english}</legend>

                <div id="group_label_1">
                    <label htmlFor={activeQuestion.id}>
                        {activeQuestion.answer}
                    </label>
                    <input
                        id={activeQuestion.id}
                        aria-label={activeQuestion.answer}
                        type="radio"
                        aria-checked="false"
                        value={activeQuestion.answer}
                        name="choice"
                    />
                </div>
            </fieldset>
        </main>
    );
};

export default Content;
