import Header from "./Components/header/Header.js";
import Content from "./Components/content/Content";
import Footer from "./Components/footer/Footeer";

function App() {
    const questions = [
        {
            id: 1,
            level: 1,
            question: {
                romana: "Care dintre acestea este “cafea“?",
                english: "Which one of these is “coffee”?",
            },
            answer: "das Kaffee",
            image: "https://d2pur3iezf4d1j.cloudfront.net/images/6fd84b8a838c43c4a84b44b08b10177e",
        },
        {
            id: 2,
            level: 1,
            question: {
                romana: "Care dintre acestea este “lapte“?",
                english: "Which one of these is “milk”?",
            },
            answer: "die Milch",
            image: "https://d2pur3iezf4d1j.cloudfront.net/images/645fa42dcea02c7e2970a1285e321562",
        },
        {
            id: 3,
            level: 1,
            question: {
                romana: "Care dintre acestea este “ceai“?",
                english: "Which one of these is “tea”?",
            },
            answer: "der Tee",
            image: "https://d2pur3iezf4d1j.cloudfront.net/images/18a521f1507cb86689faa5b2e8277703",
        },
    ];

    

    return (
        <div className="App">
            <Header />
            <Content questions={questions}/>
            <Footer />
        </div>
    );
}

export default App;
