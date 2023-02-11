import { gql } from '@apollo/client';

const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: Status!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation updateProject(
    $name: String!
    $description: String!
    $status: StatusUpdate!
  ) {
    updateProject(name: $name, description: $description, status: $status) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export { ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT };
