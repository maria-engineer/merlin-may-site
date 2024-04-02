import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../common/layout";
import { Body } from "../common/commonStyles";

import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

const Main = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column1 = styled.div`
  width: 50%;
  padding: 1rem;
`;

const ColumnBreak = styled.div`
  @media (max-width: 600px) {
    width: 5%;
  }
  width: 9%;
  padding: 1rem;
`;

const Column2 = styled.div`
  @media (max-width: 600px) {
    width: 45%;
  }
  width: 41%;
  padding: 1rem;
  align-contents: right;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout
      page="About"
      title="Merlin May - Author"
      SeoDescription="The official website of Merlin May."
      SeoKeywords={[
        "Merlin May",
        "Author",
        "Author Merlin May",
        "fiction writer Merlin May",
      ]}
    >
      <Body>
        <Main>
          <Column1>
            Merlin May is a software engineer and author based in London, United
            Kingdom. They hope to write their first novel soon, if they can stop
            getting distracted by every single detail in their own homebrew
            TTRPG. Merlin has a degree in Computer Science from Oxford
            University, but don't hold that against them.
          </Column1>
          <ColumnBreak />
          <Column2>
            <StaticImage
              border-radius={"20px"}
              width={200}
              height={200}
              alt={
                "Stylised drawing of Merlin May who is a bit shy about showing their face, so this will have to do."
              }
              src={"../images/merlin.png"}
            />
          </Column2>
        </Main>
      </Body>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
