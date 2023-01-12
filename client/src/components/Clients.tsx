import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { GET_CLIENTS } from '../graphql/queries/clientQueries';
import ClientRow from './ClientRow';
import Spinner from './Spinner';

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong:(</p>;
  return (
    <>
      {!loading && !error && (
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.clients.map((client: any) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </Tbody>
        </Table>
      )}
    </>
  );
};

export default Clients;

const Table = styled.table`
  width: 90%;
  margin: 0 auto;
  border-collapse: collapse;
  border: 1px solid #e10098;
  border-radius: 0.5em;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const Thead = styled.thead`
  background-color: #e10098;
  color: white;
  text-align: left;
  font-weight: bold;
`;

const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: #e10098;
  }
`;

const Th = styled.th`
  font-size: 1.2em;
  padding: 0.5em 0;
  text-align: center;
  border-bottom: 1px solid #e10098;
`;

const Tbody = styled.tbody`
  background-color: #e10098;
  color: white;
  text-align: left;
  font-weight: bold;
`;
