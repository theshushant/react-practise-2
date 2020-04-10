import React from "react";
import './CustomColoredBox.scss';
import CustomLabel from "../custom/CustomLabel/CustomLabel";

interface Props {
    backgroundColor: string,
    text: string,
    textColor?: string,
}

const CustomColoredBoxWithText: React.FC<Props> = (props: Props) => {

    return (<div className={"custom-colored-box-text"}>
        <div style={{backgroundColor: props.backgroundColor}} className={"colored-box"}/>
        <CustomLabel labelText={props.text} labelColor={props.textColor ? props.textColor : "black"}/>
    </div>);
};

export default CustomColoredBoxWithText;