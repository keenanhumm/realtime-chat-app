import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

const PORT = 4000;

const link = new WebSocketLink({
  uri: `ws://localhost:${PORT}`,
  options: {
    reconnect: true,
  },
});

export const apolloClient = new ApolloClient({
  uri: `http://localhost:${PORT}/`,
  cache: new InMemoryCache(),
  link,
});
