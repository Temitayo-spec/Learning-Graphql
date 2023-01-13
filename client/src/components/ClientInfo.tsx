import styled from 'styled-components';
import { FaIdBadge, FaEnvelope, FaPhone } from 'react-icons/fa';

type Props = {
  client: any;
};

const ClientInfo = ({ client }: Props) => {
  return (
    <Container>
      <H3>Client Info</H3>
      <P>
        <span>
          <FaIdBadge />
        </span>
        {client?.name}
      </P>
      <P>
        <span>
          <FaEnvelope />
        </span>
        {client?.email}
      </P>
      <P>
        <span>
          <FaPhone />
        </span>
        {client?.phone}
      </P>
    </Container>
  );
};

export default ClientInfo;

const Container = styled.div`
  background: #f5f5f5;
  border-radius: 5px;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const H3 = styled.h3`
  margin-bottom: 1em;
  font-size: 1.2rem;
  font-weight: 300;
  color: #e10098;
`;

const P = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  color: #333;
  margin-bottom: 0.5em;

  span {
    margin-right: 0.5em;
    color: #e10098;
  }
`;
