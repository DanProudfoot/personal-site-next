import styled from "styled-components";
import { motion } from "framer-motion";

import { JaggedEdge } from "components/JaggedEdge";
import { Theme } from "components/Theme";

const containerVariants = {
  initial: {
    filter: "drop-shadow(0px 0px 0px rgba(var(--rgb-black), 0.4))"
  },
  animate: {
    filter: "drop-shadow(20px 20px 0px rgba(var(--rgb-black), 0.4))",

    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
      when: "afterChildren"
    }
  }
};

const characterVariant = {
  initial: {
    color: "var(--hex-background)",
    WebkitTextStrokeWidth: "0vw",
    WebkitTextStrokeColor: "var(--hex-primary)"
  },
  animate: {
    WebkitTextStrokeColor: "var(--hex-highlight)",
    WebkitTextStrokeWidth: "0.4vw",

    transition: {
      duration: 0.6
    }
  }
};

const splitStringToSpan = text =>
  text.split("").map((char, index) => (
    <Character variants={characterVariant} key={index}>
      {char}
    </Character>
  ));

export default function HomeHeader() {
  return (
    <Theme name="blue">
      <JaggedEdge shadow="dark" edge="bottom" background>
        <Header>
          <Name
            initial="initial"
            animate="animate"
            variants={containerVariants}
          >
            <div>{splitStringToSpan("Dan")}</div>
            <div>{splitStringToSpan("Proudfoot")}</div>
          </Name>
        </Header>
      </JaggedEdge>
    </Theme>
  );
}

const Header = styled.header`
  min-height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled(motion.h1)`
  line-height: 0.8em;
  font-size: 13vw;
  text-transform: uppercase;

  font-weight: 900;

  color: var(--hex-background);
`;

const Character = styled(motion.span)`
  display: inline-block;
`;
