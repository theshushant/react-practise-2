import React from "react";
import {Field} from "formik";
import './CustomRadionOption.scss';

interface Props {
    option: string,
    optionValue?: string,
    fieldName?: string
}

const CustomRadioOption: React.FC<Props> = (props: Props) => {
    return (<div className={"custom-radio-button"}>
        <Field className={"radio-button"}
               type={"radio"}
               value={props.optionValue ? props.optionValue : props.option}
               name={props.fieldName ? props.fieldName : props.option}/>
        <p>
            {props.option}
        </p>
    </div>)
        ;
};

export default CustomRadioOption;