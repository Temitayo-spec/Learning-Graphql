import { Link } from 'react-router-dom';
import styled from 'styled-components';
import notfound from '../components/assets/404.jpg';

const Notfound = () => {
  return (
    <Container>
      <ImageCtn>
        <img src={notfound} alt="404" />
      </ImageCtn>
      <Link to="/">Go back to home</Link>
    </Container>
  );
};

export default Notfound;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  height: calc(100vh - 100px);

  a {
    text-decoration: none;
    color: #000;
    font-size: 1.5em;
    font-weight: 300;
    margin-top: 1em;
    padding: 0.5em 1em;
    border-radius: 5px;
    background: #e10098;
    color: #fff;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #333;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const ImageCtn = styled.div`
  width: 50%;
  img {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
