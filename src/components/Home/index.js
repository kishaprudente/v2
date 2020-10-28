import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import Hero from './hero';

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        flower: file(relativePath: { eq: "flower-bg.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => {
      const imageData = data.flower.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag='section'
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Content>
            <Hero />
          </Content>
        </BackgroundImage>
      );
    }}
  />
);

const Home = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 100%;
  width: 100%;
`;

export default Home;
