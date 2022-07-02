import "./content.css";
import { useState } from "react";
import React from "react";
import Choice from "./Choice";

const Content = ({ questions }) => {
    return (
        <main>
            <Choice questions={questions}/>
        </main>
    );
};

export default Content;
