import React from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import Header from "./header";

const Main = styled.main`
    background-color: #fff;
    font-family: Cormorant;
    color: rgba(0,0,0,0.75);
    padding: 0rem 2rem 0rem 2rem;
`;



type LayoutProps = {
    SeoKeywords: Array<string>,
    SeoDescription: string,
    title: string,
    page: string,
    children: JSX.Element
}

export default function Layout(props : LayoutProps) {
  return (
    <React.Fragment>
      <Helmet>
      <meta name={`description`} content={props.SeoDescription} />
        <meta name={`twitter:title`} content={props.title} />
        <meta name={`twitter:description`} content={props.SeoDescription} />
        <meta name={`twitter:card`} content={"summary"} />
        <meta name={`og:title`} content={props.title} />
        <meta name={`og:description`} content={props.SeoDescription} />
        <meta name={"keywords"} content={props.SeoKeywords.join(",")} />
        <meta name={"lang"} content={"en-GB"} />
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      </Helmet>
    <Main>
        <Header page={props.page}/>
        {props.children}
    </Main>
      
    </React.Fragment>
  );
}
