import styled, { css } from "styled-components";

interface RowProps {
  priority?: string;
}

export const Row = styled.div<RowProps>`
  display: grid;

  gap: 4rem;

  ${props => {
    switch (props.priority) {
      case "left":
        return css`
          grid-template-columns: [col-1] 2fr [col-2] 1fr;
        `;

      case "right":
        return css`
          grid-template-columns: [col-1] 1fr [col-2] 2fr;
        `;

      default:
      case "center":
        return css`
          grid-template-columns: [col-1] 1fr [col-2] 1fr;
        `;
    }
  }}
`;

interface ColProps {
  column: string | number;
}

export const Col = styled.div<ColProps>`
  grid-column: ${props => props.column};
`;
