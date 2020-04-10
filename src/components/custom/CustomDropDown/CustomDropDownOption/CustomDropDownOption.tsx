import React from "react";

interface Props {
    optionValue?: string,
    option: string,
}

const CustomDropDownOptions: React.FC<Props> = (props: Props) => {
    return (
        <option value={props.optionValue ? props.optionValue : props.option}>{props.option}</option>
    );
};

export default CustomDropDownOptions;