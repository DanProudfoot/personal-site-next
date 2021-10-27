import Link from "next/link";

import { Heading } from "components/Text";
import styled from "styled-components";

export default function HomeItems({ title, pages }) {
  return (
    <>
      <Heading>{title}</Heading>
      <LinkWrapper>
        {pages.map(item => (
          <Link scroll={false} key={item.url} href={item.url} passHref>
            <PortfolioLink>
              <Date>{item.when}</Date> <Name>{item.name}</Name>
            </PortfolioLink>
          </Link>
        ))}
      </LinkWrapper>
    </>
  );
}

const LinkWrapper = styled.div`
  margin-top: 4rem;
`;

const Name = styled.span`
  &::after {
    content: " >";
  }
`;

const Date = styled.div`
  color: var(--hex-contrast);
  font-size: 0.6em;
`;

const PortfolioLink = styled.a`
  color: var(--hex-highlight);
  text-shadow: 1px 1px 0px rgb(var(--rgb-black), 0.2);
  text-decoration: none;

  font-size: 2.8rem;

  display: block;

  line-height: 1em;

  & + & {
    margin-top: 3rem;
  }

  &:hover ${Name} {
    text-decoration: underline dashed;
  }
`;
