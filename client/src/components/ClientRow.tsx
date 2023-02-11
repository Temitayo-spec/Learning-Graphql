import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../graphql/mutation/clientMutation';
import { GET_CLIENTS } from '../graphql/queries/clientQueries';
import { GET_PROJECTS } from '../graphql/queries/projectQueries';
interface ClientRowProps {
  client: any;
}

const ClientRow = ({ client }: ClientRowProps) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: {
      id: client.id,
    },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });

  return (
    <Tr>
      <Td>{client.name}</Td>
      <Td>{client.email}</Td>
      <Td>{client.phone}</Td>
      <Td>
        <Button
          onClick={() => {
            if (
              window.confirm('Are you sure you want to delete this client?')
            ) {
              deleteClient();
            }
          }}
        >
          <FaTrash />
        </Button>
      </Td>
    </Tr>
  );
};

export default ClientRow;

const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: #e229a8;
  }
`;

const Td = styled.td`
  font-size: 1.2em;
  padding: 0.5em 0;
  text-align: center;
  border-bottom: 1px solid #fff;

  @media screen and (max-width: 500px) {
    font-size: 1em;
  }
`;

const Button = styled.button`
  background-color: #e71818;
  color: white;
  border: none;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  cursor: pointer;
  font-size: 1em;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e10098;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.8em;
  }
`;
