import styled from 'styled-components';
import { Clients, ClientModal, Projects } from '../components';

interface HomeProps {
  modal: boolean;
  setModal: (modal: boolean) => void;
}

const Home = ({ modal, setModal }: HomeProps) => {
  return (
    <Container>
      {modal && <ClientModal setModal={setModal} />}
      <Projects />
      <Clients />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
