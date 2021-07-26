import React, { useState } from "react";
import { Container } from "shards-react";

// local components
import Messages from "./Messages";
import SendMessage from "./SendMessage";

export default function Chat() {
  const [user, setUser] = useState("Jack");

  return (
    <Container>
      <Messages user={user} />
      <SendMessage user={user} updateUser={(e) => setUser(e.target.value)} />
    </Container>
  );
}
