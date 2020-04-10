import React from "react";
import './TestSuite.scss';
import {Formik} from "formik";
import CustomDropDown from "../custom/CustomDropDown/CustomDropDown";
import CustomButton from "../custom/CustomButton/CustomButton";

interface Props {

}

const options = ["Survey Form"];

const TestSuite: React.FC<Props> = (props: Props) => {
    return (
        <div className={"test-suite"}>
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
                              className="test-suite-form">
                            <CustomDropDown options={options} fieldName={""} labelText={"Select Test Suite:"}/>
                            <div className={"test-suite-form-options"}>
                                <CustomButton backgroundColor={"Black"} color={"white"} text={"Run Text"}/>
                                <CustomButton backgroundColor={"Grey"} color={"white"} text={"Tests"}/>
                            </div>
                            <UrlLink text={"Ask For Help"}/>
                            <UrlLink text={"Report Bug"}/>
                        </form>
                    );
                }}
            </Formik>

        </div>
    );
};

const UrlLink = (props: { text: string }) => {
    return <a className={"link"}>{props.text}</a>;
};
export default TestSuite;