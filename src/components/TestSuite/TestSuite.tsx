import React from "react";
import './TestSuite.scss';
import {Field, Formik} from "formik";
import CustomDropDown from "../custom/CustomDropDown/CustomDropDown";
import CustomButton from "../custom/CustomButton/CustomButton";
import CustomColoredBoxWithText from "../CustomColoredBoxText/CustomColoredBoxWithText";

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


                            <div className={"icon-position"}>Icon</div>

                            <CustomDropDown
                                options={options}
                                fieldName={""}
                                labelText={"Select Test Suite:"}
                                labelColor={"black"}
                            />

                            <div className={"test-details"}>
                                <div className={"test-suite-form-options"}>
                                    <CustomButton
                                        backgroundColor={"Black"}
                                        color={"white"}
                                        text={"Run Text"}
                                    width={"8rem"}
                                    />
                                    <CustomButton
                                        backgroundColor={"Grey"}
                                        color={"white"}
                                        width={"8rem"}
                                        text={"Tests"}/>
                                </div>

                                <div className={"test-information"}>
                                    <CustomColoredBoxWithText
                                        backgroundColor={"red"}
                                        text={" Test(s) Failed"}/>

                                    <CustomColoredBoxWithText
                                        backgroundColor={"green"}
                                        text={"Tests Passed"}/>

                                    <CustomColoredBoxWithText
                                        backgroundColor={"orange"}
                                        text={"Tests Executing"}/>
                                </div>
                            </div>
                            <div className={"test-suite-links"}>
                                <UrlLink text={"Ask For Help"}/>
                                <UrlLink text={"Report Bug"}/>
                            </div>


                        </form>
                    );
                }}
            </Formik>

        </div>
    );
};

const UrlLink = (props: { text: string }) => {
    return <a href={"#"} className={"link"}>{props.text}</a>;
};
export default TestSuite;