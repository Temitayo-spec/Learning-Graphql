import { GET_PROJECT } from '../graphql/queries/projectQueries';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  ClientInfo,
  DeleteProjectButton,
  EditProjectForm,
  Spinner,
} from '../components';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;
  return (
    <Container>
      {!loading && !error && (
        <Inner>
          <BackLink to="/">
            <span>
              <FaArrowLeft />
            </span>
            Back
          </BackLink>
          <H2>{data?.project?.name}</H2>
          <Status>
            <h3>Status:</h3>
            <span>{data?.project?.status}</span>
          </Status>
          <ID>Project ID: {data?.project?.id}</ID>
          <Description>
            <p>{data?.project?.description}</p>
          </Description>

          {data?.project?.client && (
            <ClientInfo client={data?.project?.client} />
          )}

          <EditProjectForm project={data?.project} />

          <DeleteProjectButton projectId={data?.project?.id as string} />
        </Inner>
      )}
    </Container>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Inner = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 1em auto;
  width: 80%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  @media (max-width: 500px) {
    width: 90%;
    margin: 1em auto;
  }
`;

const BackLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  margin-bottom: 1em;
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  width: 100px;
  background: #e10098;
  color: #fff;
  padding: 0.5em;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #c1007f;
  }
`;

const H2 = styled.h2`
  font-size: 1.5em;
  color: #e10098;
`;

const ID = styled.div`
  font-size: 0.8rem;
  color: #999;
  margin-bottom: 1em;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 1em;
  h3 {
    font-size: 1.2rem;
    font-weight: 300;
    color: #999;
  }
  span {
    font-weight: bold;
    color: #e10098;
  }
`;

const Description = styled.div`
  p {
    font-size: 1rem;
    color: #666;
  }
`;
