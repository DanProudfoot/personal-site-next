import styled, { css } from "styled-components";

interface ThemeProps {
  readonly name: "white" | "blue" | "pink";
}

export const Theme = styled.div<ThemeProps>`
  ${props => {
    switch (props.name) {
      default:
      case "white":
        return css`
          --hex-primary: var(--hex-blue);
          --hex-highlight: var(--hex-pink);
          --hex-contrast: var(--hex-black);
          --hex-background: var(--hex-white);

          --rgb-primary: var(--rgb-blue);
          --rgb-highlight: var(--rgb-pink);
          --rgb-contrast: var(--rgb-black);
          --rgb-background: var(--rgb-white);
        `;

      case "blue":
        return css`
          --hex-primary: var(--hex-white);
          --hex-highlight: var(--hex-pink);
          --hex-contrast: var(--hex-white);
          --hex-background: var(--hex-blue);

          --rgb-primary: var(--rgb-white);
          --rgb-highlight: var(--rgb-pink);
          --rgb-contrast: var(--rgb-white);
          --rgb-background: var(--rgb-blue);
        `;

      case "pink":
        return css`
          --hex-primary: var(--hex-blue);
          --hex-highlight: var(--hex-white);
          --hex-contrast: var(--hex-black);
          --hex-background: var(--hex-pink);

          --rgb-primary: var(--rgb-blue);
          --rgb-highlight: var(--rgb-white);
          --rgb-contrast: var(--rgb-black);
          --rgb-background: var(--rgb-pink);
        `;
    }
  }}
`;
