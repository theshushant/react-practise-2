import React from "react";
import CustomCheckBoxOption from "./CustomCheckBoxOption/CustomCheckBoxOption";
import {Field} from "formik";
import CustomLabel from "../CustomLabel/CustomLabel";

interface Props {
    label: string,
    labelColor?: string,
    options: Array<string>
}

const CustomQuestionWithCheckBoxOption: React.FC<Props> = (props: Props) => {
    return (
        <div className={"radio-question"}>
            <CustomLabel labelText={props.label}/>
            <Field as={"checkbox"} name={"hhh"}>
                {props.options.map((option) => <CustomCheckBoxOption option={option}/>)}
            </Field>
        </div>);
};
export default CustomQuestionWithCheckBoxOption;