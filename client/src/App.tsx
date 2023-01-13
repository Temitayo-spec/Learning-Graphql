import styled from 'styled-components';
import { Clients, Header } from './components';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import ClientModal from './components/ClientModal';
import { useState } from 'react';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing = [], incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing = [], incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

function App() {
  const [modal, setModal] = useState(false);
  return (
    <ApolloProvider client={client}>
      <Header setModal={setModal} />
      <Container>
        {modal && <ClientModal setModal={setModal} />}
        <Clients />
      </Container>
    </ApolloProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
