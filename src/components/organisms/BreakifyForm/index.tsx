import React, { useState } from "react";
import breakingBad from "../../../lib/breakingBad";
import filterElements from '../../../config/splitCharacters';
import LabelValue from "../../molecules/LabelValue";
import { CustomLabel } from "../../atoms/label";
import Button from "../../atoms/Button";
import { useDispatch } from "react-redux";
import { addElement } from "../../../slice/DataSlice";
import { useSelector } from "react-redux";

interface ISelector {
    data?: {
        first: Array<any>;
        last: Array<any>;
    }
} 

const BreakifyForm: React.FC = () => {
    const [ firstNameState, setFirstNameState ] = useState<string>('');
    const [ lastNameState, setLastNameState ] = useState<string>('');

    const dispatch = useDispatch();
    const response: ISelector = useSelector((state: any) => state.elements);

    const firstNameHandlerEvent = (value: string) => {
        setFirstNameState(value)
    }
    const lastNameHandlerEvent = (value: string) => {
        setLastNameState(value);
    }

    return <>
        <main style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 530,
          gap: '2rem',
          height: '100vh'
        }}>
          <div style={{color: '#fff', display: 'flex', gap: 16, alignItems: 'center', flexDirection: 'column'}}>
            {response?.data?.first && <LabelValue textValue={response?.data?.first}/>}
            {response?.data?.last && <LabelValue textValue={response?.data?.last}/>}
          </div>
          <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16
          }}>
            <div style={{
              display: 'flex',
              gap: 8
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4
              }}>
                <CustomLabel text={"First Name"}/>
                <input type='text' style={{borderRadius: 8,padding: 12, fontSize: '12pt', fontWeight: 700, backgroundColor: '#CCC'}} onChange={(ev: any) => firstNameHandlerEvent(ev.target.value)}/>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4
              }}>
                <CustomLabel text={"First Name"}/>
                <input type='text'  style={{borderRadius: 8,padding: 12, fontSize: '12pt', fontWeight: 700, backgroundColor: '#CCC'}} onChange={(ev: any) => lastNameHandlerEvent(ev.target.value)}/>
              </div>
            </div>
            <Button text={"breakify"} onClick={() => {
                const firstResponse = filterElements(firstNameState, breakingBad);
                const LastResponse = filterElements(lastNameState, breakingBad);
                dispatch(addElement({first:firstResponse, last:LastResponse}))
            }}/>
          </div>
        </main>
    </>
}

export default BreakifyForm;
