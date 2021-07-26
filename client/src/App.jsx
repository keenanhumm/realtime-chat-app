import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";

// apollo config
import { apolloClient } from "./apollo/config";

// import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./index.css";

// ui components
import Chat from "./Chat";

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Chat />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
