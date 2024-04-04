import { gql } from "apollo-server-express";


const Schema = gql`
type Query {
  hello: String
}

type Mutation {
  addUser(name: String!, email: String!, role: String!): User!
}

type User {
  id: ID!
  name: String!
  email: String!
  role: String!
}
`;

export default Schema;


