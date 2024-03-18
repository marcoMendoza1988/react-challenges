import React from 'react';
import BreakifyForm from './components/organisms/BreakifyForm';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  background-color: #333;
  align-items: center;
`;

function App() {

  return (
    <Wrapper>
      <BreakifyForm />
    </Wrapper>
  );
}

export default App;
