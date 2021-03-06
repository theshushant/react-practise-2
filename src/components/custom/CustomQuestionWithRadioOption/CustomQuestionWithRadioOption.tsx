import React from "react";
import './CustomQuestionWithRadioOption.scss';
import CustomRadioOption from "./CustomRadioOption/CustomRadioOption";

import CustomLabel from "../CustomLabel/CustomLabel";

interface Props {
    label: string,
    labelColor?: string,
    options: Array<string>
}

const CustomQuestionWithRadioOption: React.FC<Props> = (props: Props) => {
    return (
        <div className={"radio-question"}>
            <CustomLabel labelText={props.label}/>
            {props.options.map((option) => <CustomRadioOption option={option}/>)}
        </div>);
};
export default CustomQuestionWithRadioOption;