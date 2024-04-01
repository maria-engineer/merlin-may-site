import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../common/layout";
import { Body } from "../common/commonStyles";

const BooksPage: React.FC<PageProps> = () => {
  return (
    <Layout
      page="Books"
      title="Merlin May - Books"
      SeoDescription="The official website of Merlin May."
      SeoKeywords={[
        "Merlin May",
        "Author",
        "Author Merlin May",
        "fiction writer Merlin May",
        "Merlin May published books",
      ]}
    >
      <Body>
        Merlin is hard at work to make this page have content.
      </Body>
    </Layout>
  );
};

export default BooksPage;

export const Head: HeadFC = () => <title>Books</title>;
