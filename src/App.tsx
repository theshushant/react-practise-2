import React from 'react';
import './App.css';
import MainSurveyComponent from "./components/MainSurveyComponent/MainSurveyComponent";
import TestSuite from "./components/TestSuite/TestSuite";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

function App() {
    return (
        <div className="App">
            {/*<TestSuite/>*/}
            <SurveyLabel/>
            <MainSurveyComponent/>
            <HeaderComponent/>
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
