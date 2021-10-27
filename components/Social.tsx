import { motion } from "framer-motion";
import styled from "styled-components";

export default function Social() {
  return (
    <SocialNav>
      <SocialItem
        href="https://twitter.com/DanProudfeet"
        alt="Twitter"
      ></SocialItem>
      <SocialItem
        href="https://github.com/DanProudfoot"
        alt="Github"
      ></SocialItem>
      <SocialItem
        href="mailto:dan@danproudfoot.co.uk"
        alt="Email me!"
      ></SocialItem>
    </SocialNav>
  );
}

const SocialNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 2rem;
`;

const SocialItem = styled.a`
  display: inline-block;
`;
