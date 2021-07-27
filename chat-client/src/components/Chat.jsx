import React, { useState } from "react";
import { apolloClient } from "../apollo/config";
import { ApolloProvider } from "@apollo/client";

// local components
import Messages from "./Messages";
import SendMessage from "./SendMessage";

export default function Chat() {
  const [user, setUser] = useState("Jack");

  return (
    <ApolloProvider client={apolloClient}>
      <Messages user={user} />
      <SendMessage user={user} updateUser={(e) => setUser(e.target.value)} />
    </ApolloProvider>
  );
}
