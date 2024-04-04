import { gql } from "apollo-server-express";


const Schema = gql`
type Car {
  id: ID!,
  carType: String!,
  color: String!
  year: Int!
}

type Query {
  
}

type Mutation {
 
}
`;

export default Schema;


