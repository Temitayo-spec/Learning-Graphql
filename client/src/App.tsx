import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <h1>React + TypeScript + Styled Components</h1>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
