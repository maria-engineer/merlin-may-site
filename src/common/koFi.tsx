import React from "react";

import styled from "@emotion/styled";

const Import = styled.iframe`
  border: none;
  width: 100%;
  padding: 4px;
  background: #fff;
`;

const Title = styled.p`
  border: none;
  font-size: x-large;
  text-align: center;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 4px;
  background: #fff;
  font-family: Nunito, sans-serif;
`;

export default function KoFi(): JSX.Element {
  return (
    <div>
      <Title>If you enjoyed this story, please consider supporting me.</Title>
      <Import
        id="kofiframe"
        src="https://ko-fi.com/merlinmay/?hidefeed=true&widget=true&embed=true&preview=true"
        height="620"
        title="merlinmay"
      ></Import>
    </div>
  );
}
