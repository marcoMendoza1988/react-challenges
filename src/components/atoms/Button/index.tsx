import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
    background-color: #0f5135;
    border-radius: 8px;
    width: 100%;
    padding: 12px;
    font-size: 12pt;
    font-weight: 900;
    border: none;
    color: #fff;
    cursor: pointer;
`;

type CustomButtonProp = {
    text: string;
    style?: object;
    onClick: () => void
}

const Button: React.FC<CustomButtonProp> = ({text, style, onClick}) => {
    return <>
        <CustomButton
            type='button' 
            style={{...style}}
            onClick={() => onClick()}>{text}
        </CustomButton>
    </>
}

export default Button;
