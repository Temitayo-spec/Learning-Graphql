import styled from 'styled-components';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_PROJECT } from '../graphql/queries/projectQueries';
import { UPDATE_PROJECT } from '../graphql/mutation/projectMutation';

interface Props {
  project: {
    [x: string]: any;
    name: string;
    description: string;
    status: string;
  };
}

const EditProjectForm = ({ project }: Props) => {
  const [info, setInfo] = useState({
    name: project.name,
    description: project.description,
    status: '',
    loading: false,
  });

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      name: info.name,
      description: info.description,
      status: info.status,
    },
    onCompleted: () => {
      setInfo({ ...info, loading: false });
    },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!info.name || !info.description || !info.status) {
      return alert('Please fill out all fields');
    }
    setInfo({
      ...info,
      loading: true,
    });

    updateProject();
  };
  return (
    <Wrapper>
      <H3>Update Project</H3>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            onChange={(e) => {
              setInfo({ ...info, name: e.target.value });
            }}
            value={info.name}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            onChange={(e) => {
              setInfo({ ...info, description: e.target.value });
            }}
            value={info.description}
          ></TextArea>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="status">Status</Label>
          <Select
            id="status"
            value={info.status}
            onChange={(e) => {
              setInfo({ ...info, status: e.target.value });
            }}
          >
            <Option value="new">Not Started</Option>
            <Option value="progress">In Progress</Option>
            <Option value="completed">Completed</Option>
          </Select>
        </FormGroup>
        <SubmitButton type="submit">Update Project</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default EditProjectForm;

const Wrapper = styled.div``;

const H3 = styled.h3`
  font-size: 1.5em;
  color: #e10098;
`;

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
  height: 60px;
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
