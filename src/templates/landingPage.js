import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  // Add your styling here
`;

const LandingPageTemplate = ({ data }) => {
  const { title, content } = data.contentfulLandingPage;

  return (
    <Container>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
    </Container>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulLandingPage(slug: { eq: $slug }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default LandingPageTemplate;
