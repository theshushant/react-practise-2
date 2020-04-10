import React from "react";
import {Formik} from "formik";
import CustomFormField from "../custom/CustomFormField/CustomFormField";
import './MainSurveyComponent.scss';
import CustomDropDown from "../custom/CustomDropDown/CustomDropDown";
import CustomQuestionWithRadioOption from "../custom/CustomQuestionWithRadioOption/CustomQuestionWithRadioOption";
import CustomQuestionWithCheckBoxOption from "../custom/CustomQuestionWithCheckBox/CustomQuestionWithCheckBox";
import CustomLabel from "../custom/CustomLabel/CustomLabel";
import CustomButton from "../custom/CustomButton/CustomButton";

const recommendationOption = ["Definitely", "MayBe", "Not Sure"];

const currentRoleOption = ["Select Current Role ", "Student", "Full Time Job", "Full Time Learner", "Prefer Not To Say", "Other"];

const favouriteFeatureOption = ["Select An Option ", "Challenges", "Projects", "Community", "Open Source"];

const improvementOption = ["Front-end ", "Back-end", "Data Visualization", "Challenges", "Open Source Community", "Wiki"];


const MainSurveyComponent = () => {
    return (
        <div className={"main-survey-component"}>
            <CustomLabel labelText={"freeCodeCamp Survey Form"} fonSize={"1.8rem"}/>
            <CustomLabel labelText={"Thank you for taking the time to help us improve the platform"}/>
            <div className={"main-survey-component-form"}>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    // validationSchema={
                    //
                    // }
                    onSubmit={(values, actions) => {
                        console.log('SDVHmzsd');
                        console.log(values);
                    }}>
                    {formikProps => {
                        return (
                            <form onSubmit={formikProps.handleSubmit} onReset={formikProps.handleReset}
                                  className="form">
                                <CustomFormField placeHolder={"Enter Your Name"} fieldName={"name"} labelText={"Name"}/>
                                <CustomFormField placeHolder={"Enter Your Email"} fieldName={"email"}
                                                 labelText={"Email"}/>
                                <CustomFormField placeHolder={"Age"} fieldName={"age"} labelText={"Age (Optional)"}/>
                                <CustomDropDown fieldName={"current-role"} options={currentRoleOption}
                                                labelText={"Which option best describes your current role?"}/>
                                <CustomQuestionWithRadioOption label={"Would you recommend freeCodeCamp to a friend?"}
                                                               options={recommendationOption}/>
                                <CustomDropDown fieldName={"favourite-feature"} options={favouriteFeatureOption}
                                                labelText={"What is your favorite feature of freeCodeCamp?"}/>
                                <CustomQuestionWithCheckBoxOption options={improvementOption}
                                                                  label={"What would you like to see improved? (Check all that apply)"}/>
                                <CustomFormField placeHolder={"Enter Your Comment Here"}
                                                 labelText={"Any comments or suggestions?"} height={"6rem"}
                                                 fieldName={"comment"}/>

                                <CustomButton text={"Submit"} color={"white"} backgroundColor={"green"}/>
                            </form>
                        );
                    }}
                </Formik>

            </div>
        </div>
    );
};

export default MainSurveyComponent;