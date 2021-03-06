import { Heading } from "components/Text";
import styled from "styled-components";

export default function HomeItems({ title, pages }) {
  return (
    <>
      <Heading>{title}</Heading>
      <LinkWrapper>
        {pages.map(item => (
          <PortfolioLink key={item.url}>
            <Date>{item.when}</Date> <Name>{item.name}</Name>
          </PortfolioLink>
        ))}
      </LinkWrapper>
    </>
  );
}

const LinkWrapper = styled.div`
  margin-top: 4rem;
`;

const Name = styled.span`
  /* &::after {
    content: " >";
  } */
`;

const Date = styled.div`
  color: var(--hex-contrast);
  font-size: 0.6em;
`;

const PortfolioLink = styled.div`
  color: var(--hex-highlight);
  text-shadow: 1px 1px 0px rgb(var(--rgb-black), 0.2);
  text-decoration: none;

  font-size: 2.8rem;

  display: block;

  line-height: 1em;

  & + & {
    margin-top: 2rem;
  }

  /* &:hover ${Name} {
    text-decoration: underline dashed;
  } */
`;
