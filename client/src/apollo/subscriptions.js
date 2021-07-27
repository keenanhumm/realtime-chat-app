import { gql } from "@apollo/client";

export const SUBSCRIBE_MESSAGES = gql`
  subscription {
    messages {
      id
      content
      user
    }
  }
`;
