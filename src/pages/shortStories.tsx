import * as React from "react";
import { HeadFC, PageProps, navigate } from "gatsby";
import Layout from "../common/layout";
import { Body } from "../common/commonStyles";

import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

export const ShortStoryCard = styled.li`
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0.5rem;
  }
  box-shadow: 0 2px 1px hsl(220, 7%, 83%);
  background-color: hsl(110, 5%, 99%);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

export const ShortStoryContent = styled.div`
  @media (max-width: 600px) {
    margin-left: 0;
    padding: 0.5rem;
  }
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-left: 2rem;
`;

export const ShortStoryTitle = styled.h2`
  @media (max-width: 600px) {
    text-align: center;
  }
  font-weight: bold;
  text-align: left;
  font-size: 1.4rem;
`;

export const ShortStorySubTitle = styled.h3`
  font-weight: medium;
  text-align: left;
  font-size: 1.2rem;
`;

export const ShortStoryDescription = styled.p`
  padding-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.1;
`;

export const ShortStoryLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ShortStoryButton = styled.button`
  button.disabled {
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

export const ShortStoryLink = styled.a`
  text-decoration: none;
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
      SeoImage="../images/merlin.png"
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
                flexShrink: "0",
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
                <ShortStoryButton onClick={() => navigate("/muted/")}>
                  Read here
                </ShortStoryButton>
                <ShortStoryLink
                  href="https://merlinmay.gumroad.com/l/muted-ebook"
                  target="_blank"
                >
                  Buy Here
                </ShortStoryLink>
              </ShortStoryLinks>
            </ShortStoryContent>
          </ShortStoryCard>
          <ShortStoryCard>
            <StaticImage
              style={{
                filter: "grayscale(100%)",
                borderRadius: "10px",
                boxShadow: "0 2px 1px hsl(220, 7%, 83%)",
                flexShrink: "0",
              }}
              width={200}
              height={300}
              alt={
                "Cover of Aphasia. It features the story title followed by two panicked eyes with duct tape covering the mouth."
              }
              src={"../images/aphasia.png"}
            />
            <ShortStoryContent>
              <ShortStoryTitle>Aphasia</ShortStoryTitle>
              <ShortStoryDescription>
                Following the events of John's story. Jayce has always been the
                communicator, being able to achieve anything he wanted through
                the power of his words. Aphasia tells the story of Jayce and his
                struggle to communicate when his speech is taken away by a
                sudden stroke.
              </ShortStoryDescription>
              <ShortStoryLinks>
                <ShortStoryButton onClick={() => navigate("/aphasia/")}>
                  Read here
                </ShortStoryButton>
                <ShortStoryLink
                  href="https://merlinmay.gumroad.com/l/aphasia-story/"
                  target="_blank"
                >
                  Buy Here
                </ShortStoryLink>
              </ShortStoryLinks>
            </ShortStoryContent>
          </ShortStoryCard>
          <ShortStoryCard>
            <StaticImage
              style={{
                filter: "grayscale(100%)",
                borderRadius: "10px",
                boxShadow: "0 2px 1px hsl(220, 7%, 83%)",
                flexShrink: "0",
              }}
              width={200}
              height={300}
              alt={
                "Cover of Can't buy me love. It features the story title followed, and name of the author. At the centre it's a sketch of a pile of money, in pounds, stylised so that the 0 and the eyes of the queen form a heart."
              }
              src={"../images/love.png"}
            />
            <ShortStoryContent>
              <ShortStoryTitle>Can't buy me love</ShortStoryTitle>
              <ShortStoryDescription>
                K has only ever wanted one thing in life: to be loved. But that
                was exactly the one thing she was never able to achieve. Losing
                herself in the search she is ready to give up, until she
                realises that while money may not be able to buy her love, it
                may just be enough to buy her the love <i>experience</i>.
              </ShortStoryDescription>
              <ShortStoryLinks>
                <ShortStoryButton
                  disabled={true}
                  onClick={() => navigate("/buymelove/")}
                >
                  Coming Soon
                </ShortStoryButton>
              </ShortStoryLinks>
            </ShortStoryContent>
          </ShortStoryCard>
        </ul>
      </Body>
    </Layout>
  );
};

export default ShortStoriesPage;

export const Head: HeadFC = () => <title>Short Stories</title>;
