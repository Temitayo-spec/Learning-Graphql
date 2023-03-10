import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../graphql/queries/projectQueries';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;
  return (
    <>
      {
        // check if there are any projects
        data.projects.length > 0 ? (
          // if there are projects, map through them and display them
          <Row>
            {data.projects.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Row>
        ) : (
          // if there are no projects, display this message
          <p>No projects found</p>
        )
      }
    </>
  );
};

export default Projects;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1rem;
  margin: 0 1rem;
  width: 90%;

  @media (max-width: 500px) {
    flex-direction: column;
    margin: 0;
    width: 100%;
  }
`;
