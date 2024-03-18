import React from "react";
import Label from "../../atoms/label";
import styled from "styled-components";

const LabelWrapper = styled.div`
    display: flex; 
    gap: 8; 
    align-items: center;
`;

interface textProps {
    textValue: string[]
}

const LabelValue: React.FC<textProps> = ({textValue}) => {
    return <>
        <LabelWrapper>
            {textValue?.length > 0 && textValue?.map((name, key) => name && <Label key={name} style={{fontSize: 70}} isAnElement={key === 1 ? true : false} text={name}/>)}
        </LabelWrapper>
    </>
}

export default LabelValue;
