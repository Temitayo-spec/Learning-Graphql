import styled from 'styled-components';
import logo from './assets/logo.png';
import { FaUser } from 'react-icons/fa';

interface HeaderProps {
  setModal: (modal: boolean) => void;
}

const Header = ({ setModal }: HeaderProps) => {
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
        </ButttonContainer>
      </Inner>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  padding: 2em 0;
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
  padding: 0.5em 1em;
  border-radius: 0.5em;
  font-size: 1em;
  font-weight: 300;
  color: #fff;
  background-color: #e10098;
  border: none;
  cursor: pointer;
`;
