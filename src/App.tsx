import React from 'react';
import './App.css';
import MainSurveyComponent from "./components/MainSurveyComponent/MainSurveyComponent";
import TestSuite from "./components/TestSuite/TestSuite";

function App() {
    return (
        <div className="App">
            <TestSuite/>
            <SurveyLabel/>
            <MainSurveyComponent/>
        </div>
    );
}

const SurveyLabel = () => {
    return (
        <div className={"survey-label"}>
            FCC Test Suite: Survey Form
        </div>
    );
};

export default App;
