import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../common/layout";
import { Body } from "../common/commonStyles";

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
        Muted, coming soon.
      </Body>
    </Layout>
  );
};

export default ShortStoriesPage;

export const Head: HeadFC = () => <title>ShortStories</title>;
