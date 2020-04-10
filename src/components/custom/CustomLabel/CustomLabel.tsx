import React from "react";
import './CustomLabel.scss';

interface Props {
    labelColor?: string,
    labelText: string,
    fonSize?: string,
}

const CustomLabel: React.FC<Props> = (props: Props) => {
    return (
        <label className={"custom-label"}
               style={{
                   color: props.labelColor ? props.labelColor : "white",
                   fontSize: props.fonSize ? props.fonSize : "1.2rem",
               }}>{props.labelText}</label>

    );
};

export default CustomLabel;