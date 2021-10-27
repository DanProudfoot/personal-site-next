import styled from "styled-components";
import { motion } from "framer-motion";

export const Page = styled(motion.main).attrs({
  initial: "initial",
  animate: "enter",
  exit: "exit"
})`
  min-height: 100vh;
`;

export const Section = styled.section`
  max-width: 1200px;

  margin: 0 auto;
  padding: 8rem 2rem;
`;
