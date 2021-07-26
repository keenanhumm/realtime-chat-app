import { gql } from "@apollo/client";

export const getMessages = () => gql`
  {
    messages {
      id
      content
      user
    }
  }
`;
