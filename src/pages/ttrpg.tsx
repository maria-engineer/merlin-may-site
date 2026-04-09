import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../common/layout";
import { Body } from "../common/commonStyles";
import {
  ShortStoryButton,
  ShortStoryCard,
  ShortStoryContent,
  ShortStoryDescription,
  ShortStoryLinks,
  ShortStoryTitle,
} from "./shortStories";
import { StaticImage } from "gatsby-plugin-image";

const TTRPGPage: React.FC<PageProps> = () => {
  return (
    <Layout
      page="TTRPG"
      title="Merlin May - TTRPG"
      SeoDescription="Merlin May is the pen name under which they write fiction. Merlin has a passion for tabletop RPG, especially homebrew ones. Here are the games they developed, as well as stories they may have written for other systems."
      SeoKeywords={[
        "Merlin May",
        "Author",
        "Author Merlin May",
        "fiction writer Merlin May",
        "Merlin May ttrpgs",
        "ttrpg",
        "homebrew ttrpg",
        "tabletop roleplaying games","dungeons and dragons"
      ]}
      SeoImage="../images/merlin.png"
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
                "Cover of Robin's Travels. It features a stick figure falling from a portal."
              }
              src={"../images/robin.png"}
            />
            <ShortStoryContent>
              <ShortStoryTitle>Transmigration</ShortStoryTitle>
              <ShortStoryDescription>
                
              </ShortStoryDescription>
              <ShortStoryLinks>
                <ShortStoryButton disabled={true}>Coming 2026</ShortStoryButton>
              </ShortStoryLinks>
            </ShortStoryContent>
          </ShortStoryCard>
        </ul>
      </Body>
    </Layout>
  );
};

export default TTRPGPage;

export const Head: HeadFC = () => <title>TTRPG</title>;
