import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
      client {
        id
        name
      }
    }
  }
`

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

export { ADD_PROJECT, DELETE_PROJECT, GET_PROJECT, GET_PROJECTS };
