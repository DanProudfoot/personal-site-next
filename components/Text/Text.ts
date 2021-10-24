import styled from "styled-components";

import externalIcon from "public/icons/external_link.svg";

export const Heading = styled.h2`
  font-size: 3rem;

  font-weight: 500;

  color: var(--hex-primary);

  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: var(--hex-primary);

  ${Heading} + & {
    margin-top: 2rem;
  }

  & + & {
    margin-top: 1rem;
  }
`;

export const InternalLink = styled.a`
  color: var(--hex-highlight);
  text-shadow: 1px 1px 0px rgb(var(--rgb-black), 0.2);
  text-decoration: none;

  &:hover {
    text-decoration: underline dashed;
  }
`;

export const ExternalLink = styled(InternalLink)`
  &::after {
    content: url(${externalIcon.src});
    color: var(--hex-highlight);

    display: inline-block;
    vertical-align: sub;
    width: 0.9em;
    height: 0.9em;
  }
`;
