import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Box = styled.div`
  background-color: white;
  align-items: center;
  justify-content: center;
  position: flex;
  display: flex;
  flex-direction: column;
  opacity: 0.9;
  width: 70vw;
  height: 60vh;
`;

const Logo = styled(Img)`
  width: 18%;
`;

const Title = styled.h2`
  line-height: 3em;
  font-weight: 400;
  font-size: 1.5em;
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "LOGO.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  console.log(data.logo.childImageSharp.fluid);
  return (
    <Box>
      <Logo fluid={data.logo.childImageSharp.fluid} />
      <Title>
        kisha prudente <span>{'{'}</span> software engineer <span>{'}'}</span>
      </Title>
    </Box>
  );
};

export default Hero;
