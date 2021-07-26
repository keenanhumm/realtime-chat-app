import React from "react";

import { Container } from "shards-react";
import Messages from "./Messages";

export default function Chat() {
  return (
    <Container>
      <Messages user="Jack" />
    </Container>
  );
}
