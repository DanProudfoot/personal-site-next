import React from "react";
import Head from "next/head";

import { JaggedEdge } from "components/JaggedEdge";
import { Theme } from "components/Theme";
import { Page, Section } from "components/Page";
import styled from "styled-components";
import { Headline } from "components/Text";

type PortfolioProps = {
  children: React.ReactNode;
  meta: {
    description: string;
    title: string;
    media: string[];
  };
};

export default function Portfolio({ children, meta }: PortfolioProps) {
  return (
    <Page>
      <Head>
        <title>{meta.title} | Dan Proudfoot</title>
        <meta name="description" content={meta.description || meta.title} />
      </Head>

      <Theme name="pink">
        <TextContentContainer>
          <JaggedEdge edge="right" background shadow="dark">
            <TextContent>
              <Headline>{meta.title}</Headline>
              <MDXContent>{children}</MDXContent>
            </TextContent>
          </JaggedEdge>
        </TextContentContainer>
      </Theme>

      <Theme name="black">
        <MediaContentContainer>
          <JaggedEdge background edge="right" shadow="dark">
            <MediaContent></MediaContent>
          </JaggedEdge>
        </MediaContentContainer>
      </Theme>
    </Page>
  );
}

const TextContentContainer = styled.div`
  width: 50vw;
  max-width: 960px;
  min-width: 480px;

  position: relative;
  z-index: 2;
`;

const MediaContentContainer = styled.div`
  width: 50vw;
  max-width: 960px;
  min-width: 480px;

  position: absolute;
  left: 45vw;
  top: 0;

  z-index: 1;
`;

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
