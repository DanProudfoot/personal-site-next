import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

import { Section } from "components/Layout/Layout";
import {
  Heading,
  Paragraph,
  ExternalLink,
  InternalLink
} from "components/Text/Text";
import { Theme } from "components/Theme";

import portrait from "public/images/dan_portrait_duo.jpg";

export default function Intro() {
  return (
    <Theme name="white">
      <Section>
        <Row>
          <Col column="1">
            <Heading>Hi, I'm Dan.</Heading>
            <Paragraph>
              I'm a React App developer with experience ranging from mobile apps
              to huge multimedia installations.
            </Paragraph>
            <Paragraph>
              I currently work at{" "}
              <ExternalLink target="_blank" href="https://www.sustainably.co/">
                Sustainably
              </ExternalLink>{" "}
              but I'm excited to explore new opportunities. Take a look around,
              and if you like what you see,{" "}
              <InternalLink>contact me!</InternalLink>
            </Paragraph>
          </Col>
          <Col column="2">
            <ImageOuter>
              <Image src={portrait} alt="A photo of Dan" />
            </ImageOuter>
          </Col>
        </Row>
      </Section>
    </Theme>
  );
}

const Row = styled.div`
  display: grid;
  grid-template-columns: [col-1] 2fr [col-2] 1fr;
  gap: 4rem;
`;

const Col = styled.div`
  grid-column: ${props => props.column};
`;

const ImageOuter = styled(motion.div)`
  overflow: hidden;
  border-radius: 60px;

  /* border: solid 8px var(--hex-highlight); */
  /* filter: drop-shadow(20px 20px 0px rgba(var(--rgb-primary), 0.2)); */

  & > * {
    display: block !important;
  }
`;
