import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../common/layout";
import { Body } from "../common/commonStyles";

import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

const ShortStoryCard = styled.li`
  box-shadow: 0 2px 1px hsl(220, 7%, 83%);
  background-color: hsl(110, 5%, 99%);
  padding: 1rem;
  display: flex;
  flex-direction: row;
`;

const ShortStoryContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-left: 2rem;
`;

const ShortStoryTitle = styled.h2`
  font-weight: bold;
  text-align: left;
  font-size: 1.4rem;
`;

const ShortStorySubTitle = styled.h3`
  font-weight: medium;
  text-align: left;
  font-size: 1.2rem;
`;

const ShortStoryDescription = styled.p`
  padding-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.1;
`;

const ShortStoryLinks = styled.div`
  display: flex;
  flex-direction: row;
`;

const ShortStoryButton = styled.button`
  .disabled {
    background-color: #fff;
    color: #e5e9eb;
    border: 2px solid #e5e9eb;
  }
  color: #95a7b0;
  border: 2px solid #95a7b0;
  border-radius: 5px;
  background-color: #fff;
  padding: 5px 10px 5px 10px;
`;

const ShortStoriesPage: React.FC<PageProps> = () => {
  return (
    <Layout
      page="Short Stories"
      title="Merlin May - Short Stories"
      SeoDescription="The official website of Merlin May."
      SeoKeywords={[
        "Merlin May",
        "Author",
        "Author Merlin May",
        "fiction writer Merlin May",
        "Merlin May short stories",
      ]}
    >
      <Body>
        <ul>
          <ShortStoryCard>
            <StaticImage
              style={{
                filter: "grayscale(100%)",
                borderRadius: "10px",
                boxShadow: "0 2px 1px hsl(220, 7%, 83%)",
                
              }}
              width={200}
              height={300}
              alt={
                "Cover of Muted. It features the story title followed by two closed eyes, and the symbol for mute instead of a mouth."
              }
              src={"../images/muted.png"}
            />
            <ShortStoryContent>
              <ShortStoryTitle>Muted</ShortStoryTitle>
              <ShortStoryDescription>
                John has never spoken a word in his life. Not because he
                couldn't, but because he didn't think it necessary. Saying
                things always seems to get people into trouble, so it's just
                better to say nothing at all, right?
              </ShortStoryDescription>
              <ShortStorySubTitle>Available:</ShortStorySubTitle>
              <ShortStoryLinks>
                <ShortStoryButton disabled={true}>Read here - Coming soon</ShortStoryButton>
              </ShortStoryLinks>
            </ShortStoryContent>
          </ShortStoryCard>
        </ul>
      </Body>
    </Layout>
  );
};

export default ShortStoriesPage;

export const Head: HeadFC = () => <title>ShortStories</title>;
