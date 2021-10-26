import styled from "styled-components";

import { JaggedEdge } from "components/JaggedEdge";

export default function Footer() {
  return (
    <JaggedEdge edge="top" shadow="dark">
      <Content>Built in Next.js by Dan Proudfoot. 2021</Content>
    </JaggedEdge>
  );
}

const Content = styled.footer`
  padding: 7vh 0 4vh;

  background-color: var(--hex-black);

  color: var(--hex-white);
  text-align: center;
  font-weight: 300;
`;
