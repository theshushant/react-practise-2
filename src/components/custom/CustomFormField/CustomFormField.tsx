import React from "react";
import {Field} from "formik";
import './CustomFormField.scss';
import CustomLabel from "../CustomLabel/CustomLabel";

interface Props {
    labelText: string,
    labelColor?: string,
    fieldName: string,
    height?: string,
    placeHolder?: string,
}

const CustomFormField: React.FC<Props> = (props: Props) => {
    return (
        <div className={"custom-form-field"}>
            <CustomLabel labelText={props.labelText}/>
            <Field
                placeholder={props.placeHolder ? props.placeHolder : "Enter The Text Here"}
                className={"form-field"}
                style={{height: props.height ? props.height : "auto"}}
                name={props.fieldName}/>
        </div>
    );
};

export default CustomFormField;