import React from "react";
import {Field} from "formik";
import './CustomFormField.scss';
import CustomLabel from "../CustomLabel/CustomLabel";

interface Props {
    labelText: string,
    labelColor?: string,
    fieldName: string,
}

const CustomFormField: React.FC<Props> = (props: Props) => {
    return (
        <div className={"custom-form-field"}>
            <CustomLabel labelText={props.labelText}/>
            <Field className={"form-field"}  name={props.fieldName}/>
        </div>
    );
};

export default CustomFormField;