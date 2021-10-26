import styled from "styled-components";

export const Row = styled.div`
  display: grid;
  grid-template-columns: [col-1] 2fr [col-2] 1fr;
  gap: 4rem;
`;

export const Col = styled.div`
  grid-column: ${props => props.column};
`;
