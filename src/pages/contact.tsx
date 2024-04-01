import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../common/layout";
import { Body } from "../common/commonStyles";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout
      page="Contact"
      title="Merlin May - Contact"
      SeoDescription="The official website of Merlin May."
      SeoKeywords={[
        "Merlin May",
        "Author",
        "Author Merlin May",
        "fiction writer Merlin May",
        "Merlin May contact details",
      ]}
    >
      <Body>
        Please direct all your enquiries to{" "}
        <a href="mailto:me@merlinmay.co.uk">me@merlinmay.co.uk</a>.{" "}
      </Body>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contact</title>;
