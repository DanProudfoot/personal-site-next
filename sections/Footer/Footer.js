import { JaggedEdge } from "components/JaggedEdge/JaggedEdge";
import styled from "styled-components";

export default function Footer() {
  return (
    <JaggedEdge edge="top">
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
