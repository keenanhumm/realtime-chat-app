import React from "react";
import { useQuery } from "@apollo/client";
import { getMessages } from "./apollo/queries";

export default function Messages({ user }) {
  const { data: { messages } = {} } = useQuery(getMessages());

  const sentByCurrentUser = (sender) => sender === user;

  const renderMessage = (id, sender, content) => (
    <div
      key={id}
      style={{
        display: "flex",
        justifyContent: sentByCurrentUser(sender) ? "flex-end" : "flex-start",
        padding: "1em",
      }}
    >
      <div
        style={{
          background: sentByCurrentUser(sender) ? "teal" : "LightCyan",
          color: sentByCurrentUser(sender) ? "white" : "black",
          padding: "1em",
          maxWidth: "60%",
          borderRadius: "1em",
        }}
      >
        {content}
      </div>
    </div>
  );

  return messages ? (
    <div>
      {messages.map(({ id, user: sender, content }) =>
        renderMessage(id, sender, content)
      )}
    </div>
  ) : null;
}
