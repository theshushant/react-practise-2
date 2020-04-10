import React from "react";
import {Field} from "formik";
import './CustomCheckBoxOption.scss';

interface Props {
    option: string,
    optionValue?: string,
    fieldName?: string
}

const CustomCheckBoxOption: React.FC<Props> = (props: Props) => {
    return (<div className={"custom-checkbox-button"}>
        <Field type={"checkbox"} className = {"check-box"} value={props.optionValue ? props.optionValue : props.option}
               name={props.fieldName ? props.fieldName : props.option}/>
        <p>
            {props.option}
        </p>
    </div>)
        ;
};

export default CustomCheckBoxOption;