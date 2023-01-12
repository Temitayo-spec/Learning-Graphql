import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo.png';

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <a href="/">
          <LogoContainer>
            <Logo src={logo} alt="logo" />
            <ProjectName>ProjectMgmt</ProjectName>
          </LogoContainer>
        </a>
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

  a {
    text-decoration: none;
  }
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
