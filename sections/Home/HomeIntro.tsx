import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Heading,
  Paragraph,
  ExternalLink,
  InternalLink
} from "components/Text";
import { Theme } from "components/Theme";
import { Section } from "components/Page";
import { Col, Row } from "components/Grid";

import portrait from "public/images/dan_portrait_duo.jpg";

export default function HomeIntro() {
  return (
    <Theme name="white">
      <Section>
        <Row priority="left">
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
              <ExternalLink href="mailto:dan@danproudfoot.co.uk">
                contact me!
              </ExternalLink>
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

const ImageOuter = styled(motion.div)`
  overflow: hidden;
  border-radius: 60px;

  & > * {
    display: block !important;
  }
`;
