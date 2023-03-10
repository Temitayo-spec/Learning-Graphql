import styled from 'styled-components';
import logo from './assets/logo.png';
import { FaUser } from 'react-icons/fa';

interface HeaderProps {
  setModal: (modal: boolean) => void;
  setModalTwo: (modalTwo: boolean) => void;
}

const Header = ({ setModal, setModalTwo }: HeaderProps) => {
  return (
    <Wrapper>
      <Inner>
        <A href="/">
          <LogoContainer>
            <Logo src={logo} alt="logo" />
            <ProjectName>ProjectMgmt</ProjectName>
          </LogoContainer>
        </A>
        <ButttonContainer>
          <Button
            onClick={() => {
              setModal(true);
            }}
          >
            <FaUser />
            Add Client
          </Button>
          <Button
            onClick={() => {
              setModalTwo(true);
            }}
          >
            <FaUser />
            Add Project
          </Button>
        </ButttonContainer>
      </Inner>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  padding: 1em 0;
  background-color: #fff;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;

  @media (max-width: 500px) {
    padding: 1em 0;
    left: 0;
    z-index: 100;
    overflow-y: hidden;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

const A = styled.a`
  text-decoration: none;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const Logo = styled.img`
  width: 2em;
  height: 2em;
`;

const ProjectName = styled.h1`
  font-size: 1.5em;
  font-weight: 300;
  color: #e10098;
`;

const ButttonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 1em;
  border-radius: 50px;
  font-size: 1em;
  font-weight: 300;
  color: #fff;
  background-color: #e10098;
  border: none;
  cursor: pointer;
`;
