import React from "react";
import Head from "next/head";

import { JaggedEdge } from "components/JaggedEdge";
import { Theme } from "components/Theme";
import { Page, Section } from "components/Page";
import styled from "styled-components";
import { Headline, Paragraph } from "components/Text";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {},
  enter: {
    transition: {
      staggerChildren: 0.2
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  }
};

const panelVariants = {
  initial: {
    x: "-100%"
  },
  enter: {
    x: "0%",
    transition: { type: "spring", bounce: 0.1 }
  },
  exit: {
    x: "-100%",
    transition: { type: "spring", bounce: 0.2 }
  }
};

type PortfolioProps = {
  children: React.ReactNode;
  meta: {
    description: string;
    title: string;
    media: string[];
    when: string;
  };
};

export default function Portfolio({ children, meta }: PortfolioProps) {
  return (
    <Page variants={containerVariants}>
      <Head>
        <title>{meta.title} | Dan Proudfoot</title>
        <meta name="description" content={meta.description || meta.title} />
      </Head>

      <Container>
        <Panel style={{ gridColumn: "1 / span 2" }} variants={panelVariants}>
          <Theme name="black">
            <MediaContentContainer>
              <JaggedEdge background edge="right" shadow="dark">
                <MediaContent></MediaContent>
              </JaggedEdge>
            </MediaContentContainer>
          </Theme>
        </Panel>

        <Panel style={{ gridColumn: "1" }} variants={panelVariants}>
          <Theme name="pink">
            <JaggedEdge edge="right" background shadow="light">
              <TextContentContainer>
                <TextContent>
                  <Headline>{meta.title}</Headline>
                  <Paragraph>{meta.when}</Paragraph>
                  <MDXContent>{children}</MDXContent>
                </TextContent>
              </TextContentContainer>
            </JaggedEdge>
          </Theme>
        </Panel>
      </Container>
    </Page>
  );
}

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: 6fr 4fr 1fr;
`;

const Panel = styled(motion.div)`
  grid-row: 1;

  position: relative;
`;

const TextContentContainer = styled.div`
  max-width: 960px;
  width: 100%;
  margin-left: auto;

  position: relative;
`;

const MediaContentContainer = styled.div``;

const TextContent = styled(Section)`
  min-height: 100vh;

  padding: 4rem 2rem;
`;

const MDXContent = styled.div`
  margin-top: 3rem;
  color: var(--hex-primary);

  h1,
  h2,
  h3 {
    margin: 0;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 1em;
  }

  * + p {
    margin: 0;
    margin-top: 1em;
  }
`;

const MediaContent = styled.div`
  min-height: 100vh;
`;
