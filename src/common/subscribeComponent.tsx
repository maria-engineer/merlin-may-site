import addToMailchimp from "gatsby-plugin-mailchimp";
import Spinner from 'react-bootstrap/Spinner';
import * as React from "react";
import { SectionTitle, Text } from "./commonStyles";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  padding: 0rem 1rem 1rem 1rem;
`;

const EmailInput = styled.input`
  border-radius: 10px;
  border: 2px solid #95a7b0;
  width: 70%;
  margin-right: 1rem;
`;

const SubscribeBar = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubscribeButton = styled.button`
  :disabled {
    background-color: #fff;
    color: #e5e9eb;
    border: 2px solid #e5e9eb;
  }
  width: 20%;
  color: rgba(0, 0, 0, 0.75);
  border: 2px solid #95a7b0;
  border-radius: 10px;
  background-color: #e5e9eb;
  padding: 5px 10px 5px 10px;
`;

const Label = styled.div`
  padding: 0rem;
`;

const Message = styled.div`
  padding: 0rem;
  color: rgba(0, 0, 0, 0.65);
`;

const Warning = styled.div`
    padding: 0rem;
    color: rgba(225, 0, 0, 0.65);
`;

export default function Subscribe(props: {}) {
  const [email, setEmail] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);
  const [hasSent, setHasSent] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const sendRequest = React.useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return;
    // update state
    setIsSending(true);
    // send the actual request
    try {
      await addToMailchimp(email);
      setHasSent(true);    

    } catch (e) {
      setError(true);
      setHasSent(false);
    }
        // only update if we are still mounted
        setIsSending(false);
  }, [isSending, email, setHasSent, setIsSending, setError]); // update the callback if the state changes

  return (
    <Wrapper>
      <Label>Email address:</Label>
      <SubscribeBar>
        <EmailInput
          onChange={(e) => {
            setEmail(e.target.value);
            setHasSent(false);
            setIsSending(false);
          }}
        ></EmailInput>
        <SubscribeButton
          disabled={isSending || hasSent || !(email.includes(".") && email.includes("@"))}
          onClick={() => {
            sendRequest();
          }}
        >
          <>{isSending && <><Spinner size="sm"/> <>{" "}</></>}Subscribe</>
        </SubscribeButton>
      </SubscribeBar>
      {hasSent && <Message>Thank you for subscribing!</Message>}
      {error && <Warning>Oops! Something went wrong...</Warning>}
    </Wrapper>
  );
}
