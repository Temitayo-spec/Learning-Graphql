import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';
interface Project {
  id: string;
  name: string;
  status: string;
}

const ProjectCard = ({
  project: { id, name, status },
}: {
  project: Project;
}) => {
  return (
    <Card>
      <CardHeader>
        <H2>{name}</H2>
        <Status>{status}</Status>
      </CardHeader>
      <CardBody>
        <p>Project ID: {id}</p>
        <ViewButton to={`/project/${id}`}>
          View
          <span>
            <FaLink />
          </span>
        </ViewButton>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;

const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 1em;
  padding: 1em;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 500px) {
    width: 90%;
    margin: 1em auto;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 1.5em;
  font-weight: 300;
  color: #e10098;
`;

const Status = styled.span`
  font-size: 0.8em;
  font-weight: 300;
  color: #e10098;
  text-transform: uppercase;
  padding: 0.5em 1em;
  border-radius: 5px;
  background: #f5f5f5;
`;

const CardBody = styled.div`
  p {
    font-size: 0.8em;
    font-weight: 300;
    color: #333;
  }
`;

const ViewButton = styled(Link)`
  display: inline-flex;
  gap: 0.5em;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  background: #e10098;
  color: #fff;
  text-decoration: none;
  font-size: 0.8em;
  font-weight: 300;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #c10088;
  }
`;
