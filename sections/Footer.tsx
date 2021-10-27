import styled from "styled-components";

import { JaggedEdge } from "components/JaggedEdge";
import { Theme } from "components/Theme";
import { Section } from "components/Page";

export default function Footer() {
  return (
    <Theme name="black">
      <JaggedEdge edge="top" shadow="dark" background>
        <Section style={{ padding: "5rem 2rem" }}>
          <Content>Built in Next.js by Dan Proudfoot. 2021</Content>
        </Section>
      </JaggedEdge>
    </Theme>
  );
}

const Content = styled.footer`
  color: var(--hex-white);
  text-align: center;
  font-weight: 300;
`;
