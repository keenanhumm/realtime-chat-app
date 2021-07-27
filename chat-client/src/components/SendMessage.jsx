import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Row, Col, FormInput, Button } from "shards-react";
import { POST_MESSAGE } from "../apollo/mutations";

export default function SendMessage({ user, updateUser }) {
  const [content, setContent] = useState("");

  const [postMessage] = useMutation(POST_MESSAGE);

  const onSendMessage = () => {
    if (content) {
      postMessage({ variables: { user, content } });

      setContent("");
    }
  };

  return (
    <Row>
      <Col xs={2} style={{ padding: 0 }}>
        <FormInput label="User" value={user} onChange={updateUser} />
      </Col>
      <Col xs={8}>
        <FormInput
          label="Message"
          value={content}
          onKeyUp={(e) => {
            if (e.keyCode === 13) onSendMessage();
          }}
          onChange={(e) => setContent(e.target.value)}
        />
      </Col>
      <Col xs={2} style={{ padding: 0 }}>
        <Button onClick={onSendMessage}>Send</Button>
      </Col>
    </Row>
  );
}
