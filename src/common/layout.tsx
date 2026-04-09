import React from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import Header from "./header";

const Main = styled.main`
  @media (max-width: 600px) {
    padding: 0rem 0.1rem 0rem 0.1rem;
  }
  background-color: #fff;
  font-family: Cormorant;
  color: rgba(0, 0, 0, 0.75);
  padding: 0rem 2rem 0rem 2rem;
`;

const Footer = styled.footer`
  align-self: center;
  text-align: center;
  color: rgba(0, 0, 0, 0.55);

  a {
    color: rgba(0, 0, 0, 0.55);
  }
`;

type LayoutProps = {
  SeoKeywords: Array<string>;
  SeoDescription: string;
  title: string;
  page: string;
  SeoImage: string;
  children: JSX.Element;
};

export default function Layout(props: LayoutProps) {
  return (
    <React.Fragment>
      <head>
        <meta name={`description`} content={props.SeoDescription} />
        <meta name={`twitter:title`} content={props.title} />
        <meta name={`twitter:description`} content={props.SeoDescription} />
        <meta name={`twitter:card`} content={"summary"} />
        <meta name={`og:title`} content={props.title} />
        <meta name={`og:description`} content={props.SeoDescription} />
        <meta name={`og:image`} content={props.SeoImage}/>
        <meta name={"keywords"} content={props.SeoKeywords.join(",")} />
        <meta name={"lang"} content={"en-GB"} />
        <title>{props.title}</title>
        <meta name={"author"} content={"Merlin May"}/>
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
      </head>
      <Main>
        <Header page={props.page} />
        {props.children}

        <Footer>
          © {new Date().getFullYear()} Merlin May, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Footer>
      </Main>
    </React.Fragment>
  );
}
