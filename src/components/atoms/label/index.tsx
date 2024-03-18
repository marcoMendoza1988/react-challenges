import React from "react";
import styled from "styled-components";

const LabelIsAnElemenet = styled.span`
    padding: .5rem; 
    background-color: #0f5135; 
    color: #fff;
    font-size: 34pt;
    font-weight: 900;
`;

const LabelIsNotElemenet = styled.span`
    font-size: 34pt;
    font-weight: 900;
`;

const CustomLabelElement = styled.span`
    color: #FFF;
    font-weight: 700;
`;

type LabelProps = {
    text: string, 
    isAnElement: boolean,
    style?: object 
}

type CustomLabelProp = {
    text: string;
    style?: object
}

const Label: React.FC<LabelProps> = ({text, isAnElement, style}) => {
    return <>
        {isAnElement ? 
            <LabelIsAnElemenet style={{...style}}>{text}</LabelIsAnElemenet>
            :
            <LabelIsNotElemenet style={{...style}}>{text}</LabelIsNotElemenet>
        }
    </>
}

export const CustomLabel: React.FC<CustomLabelProp> = ({text, style}) => {
    return <>
        <CustomLabelElement style={{...style}}>{text}</CustomLabelElement>
    </>
}

export default Label;
