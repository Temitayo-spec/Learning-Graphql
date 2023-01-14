import styled from 'styled-components';
import { Clients, ClientModal, Projects, ProjectModal } from '../components';

interface HomeProps {
  modal: boolean;
  setModal: (modal: boolean) => void;
  modalTwo: boolean;
  setModalTwo: (modalTwo: boolean) => void;
}

const Home = ({ modal, setModal, modalTwo, setModalTwo }: HomeProps) => {
  return (
    <Container>
      {modal && <ClientModal setModal={setModal} />}
      {modalTwo && <ProjectModal setModalTwo={setModalTwo} />}
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
