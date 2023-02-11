import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { GET_PROJECTS } from '../graphql/queries/projectQueries';
import { DELETE_PROJECT } from '../graphql/mutation/projectMutation';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';

const DeleteProjectButton = (projectId: any) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId.projectId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <ButtonContainer>
      <Button
        onClick={() => {
          deleteProject();
        }}
      >
        <FaTrashAlt />
        Delete Project
      </Button>
    </ButtonContainer>
  );
};

export default DeleteProjectButton;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1em;
`;

const Button = styled.button`
  background: red;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5em 1em;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #f54444;
  }
`;
