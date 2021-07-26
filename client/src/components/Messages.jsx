import React from "react";
import { useQuery } from "@apollo/client";

// api
import { GET_MESSAGES } from "../apollo/queries";

export default function Messages({ user }) {
  const { data: { messages } = {} } = useQuery(GET_MESSAGES, {
    pollInterval: 500,
  });

  const sentByCurrentUser = (sender) => sender === user;

  const renderMessage = (id, sender, content) => (
    <div
      key={id}
      style={{
        display: "flex",
        justifyContent: sentByCurrentUser(sender) ? "flex-end" : "flex-start",
        alignItems: "center",
        padding: "1em",
      }}
    >
      {!sentByCurrentUser(sender) && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 50,
            marginRight: "0.5em",
            borderRadius: 25,
            textAlign: "center",
            fontSize: "18pt",
          }}
        >
          {sender.slice(0, 2).toUpperCase()}
        </div>
      )}
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
