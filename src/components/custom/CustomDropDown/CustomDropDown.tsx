import React from "react";
import './CustomDropDown.scss';
import {Field} from "formik";
import CustomDropDownOptions from "./CustomDropDownOption/CustomDropDownOption";
import CustomLabel from "../CustomLabel/CustomLabel";

interface Props {
    fieldName: string,
    options: Array<string>,
    labelText: string,
    labelColor?: string
}

const CustomDropDown: React.FC<Props> = (props: Props) => {
    return (
        <div className={"custom-drop-down"}>
            <CustomLabel
                labelText={props.labelText}
                labelColor={props.labelText ? props.labelColor : "white"}/>
            <Field className={"custom-drop-down-field"}
                   as={"select"}
                   name={props.fieldName}
                   placeHolder={"Something"}>
                {props.options.map((option) => <CustomDropDownOptions
                    option={option}
                    optionValue={"red"}/>)}
            </Field>
        </div>
    );
};

export default CustomDropDown;