import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../common/layout";
import { Body, SectionTitle, Text } from "../common/commonStyles";

import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import Subscribe from "../common/subscribeComponent";

const Main = styled.div`
  @media (max-width: 600px) {
    flex-direction: column;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Column1 = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    padding: 0.5rem;
  }
  width: 50%;
  padding: 1rem;
`;

const ColumnBreak = styled.div`
  @media (max-width: 600px) {
    height: 5%;
    width: 100%;
    padding: 0.5rem;
  }
  width: 9%;
  padding: 1rem;
`;

const Column2 = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    padding: 0.5rem;
  }
  width: 41%;
  padding: 1rem;
  align-content: right;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout
      page="About"
      title="Merlin May - Author"
      SeoImage="../images/merlin.png"
      SeoDescription="The official website of Merlin May."
      SeoKeywords={[
        "Merlin May",
        "Author",
        "Author Merlin May",
        "fiction writer Merlin May",
      ]}
    >
      <Body>
        <SectionTitle>About Merlin</SectionTitle>
        <Main>
          <Column1>
            Merlin May is a software engineer and author based in Seoul, South
            Korea. They hope to write their first novel soon, if they can stop
            getting distracted by every single detail in their own homebrew
            TTRPG. Merlin has a degree in Computer Science from Oxford
            University, but don't hold that against them.
          </Column1>
          <ColumnBreak />
          <Column2>
            <StaticImage
              style={{
                alignSelf: "right",
                borderRadius: "40px",
                boxShadow: "0 2px 1px hsl(220, 7%, 83%)",
              }}
              width={200}
              height={200}
              alt={
                "Stylised drawing of Merlin May who is a bit shy about showing their face, so this will have to do."
              }
              src={"../images/merlin.png"}
            />
          </Column2>
        </Main>
        <SectionTitle>Subscribe for updates</SectionTitle>
        <Subscribe />
      </Body>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
