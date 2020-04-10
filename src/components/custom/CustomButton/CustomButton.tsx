import React from "react";
import './CustomButton.scss';

interface Props {
    backgroundColor: string,
    color: string,
    text: string,
    width?: string
}

const CustomButton: React.FC<Props> = (props: Props) => {
    return (
        <button style={{
            backgroundColor: props.backgroundColor,
            color: props.color,
            width: props.width ? props.width : "inherit"
        }} type={"submit"} className={"custom-button"}>
            {props.text}
        </button>
    );
};

export default CustomButton;