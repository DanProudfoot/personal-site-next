import Image from "next/image";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import styled from "styled-components";

import twitter from "public/icons/twitter.svg";
import github from "public/icons/github.svg";
import email from "public/icons/at-sign.svg";

export default function Social() {
  const { scrollYProgress } = useViewportScroll();
  const transformY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-100%"]);

  return (
    <SocialNav style={{ y: transformY }}>
      <SocialItem target="_blank" href="https://twitter.com/DanProudfeet">
        <Image width="48" height="48" src={twitter} alt="" />
      </SocialItem>
      <SocialItem target="_blank" href="https://github.com/DanProudfoot">
        <Image width="48" height="48" src={github} alt="" />
      </SocialItem>
      <SocialItem target="_blank" href="mailto:dan@danproudfoot.co.uk">
        <Image width="48" height="48" src={email} alt="" />
      </SocialItem>
    </SocialNav>
  );
}

const SocialNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 2rem;
  padding: 1rem 1.5rem;

  z-index: 10;

  background-color: rgba(var(--rgb-white), 0.8);

  border-radius: 0 0 1rem 1rem;
`;

const SocialItem = styled.a`
  display: inline-block;
  width: 4rem;
  height: 4px;

  filter: invert(0.1);
  opacity: 0.6;

  & + & {
    margin-left: 2rem;
  }

  &:hover {
    opacity: 1;
  }
`;
