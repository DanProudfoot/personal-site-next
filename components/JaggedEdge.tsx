import React from "react";
import styled, { css } from "styled-components";

type Edges = "top" | "bottom" | "right" | "left" | "both-x" | "both-y";
type Shadow = "dark" | "light";
type JaggedEdgeProps = {
  edge?: Edges;
  shadow?: Shadow;
  background?: boolean;
  children: React.ReactNode;
};

export function JaggedEdge({
  edge = "top",
  shadow,
  background,
  children
}: JaggedEdgeProps) {
  return (
    <Jagged shadow={shadow} edge={edge}>
      <Mask background={background} edge={edge}>
        {children}
      </Mask>
    </Jagged>
  );
}

interface StyledJaggedProps {
  readonly shadow: Shadow;
  readonly edge: Edges;
}

const Jagged = styled.div<StyledJaggedProps>`
  position: relative;
  z-index: 5;

  ${props => {
    switch (props.edge) {
      case "top":
        return css`
          margin-top: -30px;
          --shadow-x: 0px;
          --shadow-y: -30px;
        `;

      case "bottom":
        return css`
          margin-bottom: -30px;
          --shadow-x: 0px;
          --shadow-y: 30px;
        `;

      case "right":
        return css`
          margin-right: -30px;
          --shadow-x: 30px;
          --shadow-y: 0px;
        `;

      case "left":
        return css`
          margin-left: -30px;
          --shadow-x: -30px;
          --shadow-y: 0px;
        `;

      case "both-x":
        return css`
          margin-top: -30px;
          margin-bottom: -30px;
          --shadow-x: 0px;
          --shadow-y: 30px;
        `;

      case "both-y":
        return css`
          margin-left: -30px;
          margin-right: -30px;
          --shadow-x: 30px;
          --shadow-y: 0px;
        `;

      default:
        return null;
    }
  }}

  ${props => {
    switch (props.shadow) {
      case "dark":
        return css`
          filter: drop-shadow(
            var(--shadow-x) var(--shadow-y) 0 rgba(var(--rgb-black), 0.06)
          );
        `;

      case "light":
        return css`
          filter: drop-shadow(
            var(--shadow-x) var(--shadow-y) 0 rgba(var(--rgb-white), 0.06)
          );
        `;

      default:
        return null;
    }
  }}
`;

interface StyledMaskProps {
  readonly background: boolean;
  readonly edge: Edges;
}

const Mask = styled.div<StyledMaskProps>`
  ${props =>
    props.background &&
    css`
      background-color: var(--hex-background);
    `}

  ${props => {
    switch (props.edge) {
      case "top":
        return css`
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Cpath fill='%23FFF' d='M30 0L0 30h60z'/%3E%3C/svg%3E"),
            linear-gradient(to bottom, transparent 30px, black 30px);
          mask-size: 60px 30px, 100% 100%;
          mask-repeat: repeat-x, no-repeat;
          mask-position: top;

          padding-top: 30px;
        `;

      case "bottom":
        return css`
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Cpath fill='%23FFF' d='M30 30L60 0H0z'/%3E%3C/svg%3E"),
            linear-gradient(to top, transparent 30px, black 30px);
          mask-size: 60px 30px, 100% 100%;
          mask-repeat: repeat-x, no-repeat;
          mask-position: bottom;

          padding-bottom: 30px;
        `;

      case "right":
        return css`
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 60'%3E%3Cpath fill='%23fff' d='M30 30 0 0v60l30-30Z'/%3E%3C/svg%3E"),
            linear-gradient(to left, transparent 30px, black 30px);
          mask-size: 30px 60px, 100% 100%;
          mask-repeat: repeat-y, no-repeat;
          mask-position: right;

          padding-right: 30px;
        `;

      case "left":
        return css`
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 60'%3E%3Cpath fill='%23fff' d='M30 30 0 0v60l30-30Z'/%3E%3C/svg%3E"),
            linear-gradient(to right, transparent 30px, black 30px);
          mask-size: 30px 60px, 100% 100%;
          mask-repeat: repeat-y, no-repeat;
          mask-position: left;

          padding-left: 30px;
        `;

      case "both-x":
        return css`
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Cpath fill='%23FFF' d='M30 0L0 30h60z'/%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Cpath fill='%23FFF' d='M30 30L60 0H0z'/%3E%3C/svg%3E"),
            linear-gradient(
              to top,
              transparent 30px,
              black 30px,
              black calc(100% - 30px),
              transparent calc(100% - 30px)
            );
          mask-size: 60px 30px, 60px 30px, 100% 100%;
          mask-repeat: repeat-x, repeat-x, no-repeat;
          mask-position: top, bottom;

          padding-top: 30px;
          padding-bottom: 30px;
        `;

      case "both-y":
        return css`
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 60'%3E%3Cpath fill='%23fff' d='m0 30 30 30V0L0 30Z'/%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 60'%3E%3Cpath fill='%23fff' d='M30 30 0 0v60l30-30Z'/%3E%3C/svg%3E"),
            linear-gradient(
              to right,
              transparent 30px,
              black 30px,
              black calc(100% - 30px),
              transparent calc(100% - 30px)
            );
          mask-size: 30px 60px, 30px 60px, 100% 100%;
          mask-repeat: repeat-y, repeat-y, no-repeat;
          mask-position: left, right;

          padding-left: 30px;
          padding-right: 30px;
        `;

      default:
        return null;
    }
  }}
`;
