import { gql } from "@apollo/client";

export const GET_MESSAGES = gql`
  {
    messages {
      id
      content
      user
    }
  }
`;
