import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { GET_PROJECTS } from '../graphql/queries/projectQueries';
import { ADD_PROJECT } from '../graphql/mutation/projectMutation';

interface HeaderProps {
  setModalTwo: (modal: boolean) => void;
}

const ProjectModal = ({ setModalTwo }: HeaderProps) => {
  const [data, setData] = useState({
    name: '',
    description: '',
    status: 'new',
    clientId: ''
  });

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: {
      name: data.name,
      description: data.description,
      status: data.status,
    },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_PROJECTS }) as any;
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { clients: clients.concat([addProject]) },
      });
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation here
    if (data.name === '' || data.description === '' || data.status === '') {
      alert('Please fill in all fields');
      return;
    }

    addProject();

    setModalTwo(false);
  };
  return (
    <Modal
      onClick={() => {
        setModalTwo(false);
      }}
    >
      <ModalContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ModalHeader>
          <H2 className="modal-title">Add Project</H2>
          <ButtonClose
            type="button"
            onClick={() => {
              setModalTwo(false);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </ButtonClose>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                value={data.name}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <TextArea
                id="description"
                onChange={(e) => {
                  setData({ ...data, description: e.target.value });
                }}
                value={data.description}
              ></TextArea>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="status">Status</Label>
              <Select id="status" value={data.status}
                onChange={(e) => {
                  setData({ ...data, status: e.target.value });
                }}
              >
                <Option value="new">Not Started</Option>
                <Option value="progress">In Progress</Option>
                <Option value="completed">Completed</Option>
              </Select>
            </FormGroup>
            <SubmitButton type="submit">Add Project</SubmitButton>
          </Form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  @media (max-width: 500px) {
    padding: 1em;
  }
`;

const ModalContent = styled.div`
  width: 500px;
  background-color: #fff;
  border-radius: 0.5em;
  padding: 1em;
  position: relative;

  @media (max-width: 500px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
`;

const H2 = styled.h2`
  font-size: 1.5em;
  font-weight: 300;
  color: #e10098;
`;

const ButtonClose = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5em;
  color: #e10098;
  cursor: pointer;
`;

const ModalBody = styled.div``;

const Form = styled.form``;

const FormGroup = styled.div`
  margin-bottom: 1em;
`;

const Label = styled.label`
  display: block;
  font-size: 1em;
  font-weight: 300;
  color: #e10098;
  margin-bottom: 0.5em;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5em 1em;
  border: 1px solid #e10098;
  border-radius: 0.5em;
  font-size: 1em;
  font-weight: 300;
  color: #e10098;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.5em;
  font-size: 1em;
  font-weight: 300;
  color: #fff;
  background-color: #e10098;
  cursor: pointer;
  margin-top: 1em;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5em 1em;
  border: 1px solid #e10098;
  border-radius: 0.5em;
  font-size: 1em;
  font-weight: 300;
  color: #e10098;
  resize: none;
  height: 100px;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5em 1em;
  border: 1px solid #e10098;
  border-radius: 0.5em;
  font-size: 1em;
  font-weight: 300;
  color: #e10098;
  background-color: #fff;
`;

const Option = styled.option`
  color: #e10098;
`;