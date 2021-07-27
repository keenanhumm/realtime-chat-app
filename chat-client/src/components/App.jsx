import React from "react";
import ReactDOM from "react-dom";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "../index.css";

// ext components
import { Container } from "shards-react";

// local components
import Chat from "./Chat";

const App = () => (
  <Container>
    <Chat />
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
