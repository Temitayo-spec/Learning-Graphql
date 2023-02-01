import { gql } from '@apollo/client';

const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: String!
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
      client {
        id
        name
      }
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
      name
      client {
        id
        name
      }
    }
  }
`;

export { ADD_PROJECT, DELETE_PROJECT };
