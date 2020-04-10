import React from "react";
import './MainSurvey.scss';
import TestSuite from "../TestSuite/TestSuite";
import MainSurveyComponent from "../MainSurveyComponent/MainSurveyComponent";

interface Props {

}

const MainSurvey: React.FC<Props> = (props: Props) => {
    return (<div className={'main-survey'}>
        <TestSuite/>
        <SurveyLabel/>
        <MainSurveyComponent/>
    </div>);
};

const SurveyLabel = () => {
    return (
        <div className={"survey-label"}>
            FCC Test Suite: Survey Form
        </div>
    );
};

export default MainSurvey;