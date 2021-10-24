import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export function JaggedEdge({
  edge = "both",
  shadow,
  background = false,
  children
}) {
  return (
    <Jagged shadow={shadow} edge={edge}>
      <Mask background={background} edge={edge}>
        {children}
      </Mask>
    </Jagged>
  );
}

JaggedEdge.propTypes = {
  edge: PropTypes.oneOf(["top", "bottom", "both"]),
  shadow: PropTypes.oneOf(["dark", "light"]),
  children: PropTypes.node
};

const Jagged = styled.div`
  position: relative;
  z-index: 5;

  ${props => {
    switch (props.edge) {
      case "top":
        return css`
          margin-top: -30px;
        `;

      case "bottom":
        return css`
          margin-bottom: -30px;
        `;

      case "both":
        return css`
          margin-top: -30px;
          margin-bottom: -30px;
        `;

      default:
        return null;
    }
  }}

  ${props => {
    switch (props.shadow) {
      case "dark":
        return css`
          filter: drop-shadow(0px 20px 0 rgba(var(--rgb-black), 0.06))
            drop-shadow(0px -20px 0 rgba(var(--rgb-black), 0.06));
        `;

      case "light":
        return css`
          filter: drop-shadow(0px 20px 0 rgba(var(--rgb-white), 0.06))
            drop-shadow(0px -20px 0 rgba(var(--rgb-white), 0.06));
        `;

      default:
        return null;
    }
  }} /* &:nth-child(1) {
		z-index: 5;
	}
	&:nth-child(2) {
		z-index: 4;
	}
	&:nth-child(3) {
		z-index: 3;
	}
	&:nth-child(4) {
		z-index: 2;
	}
	&:nth-child(5) {
		z-index: 1;
	} */
`;

const Mask = styled.div`
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

          & > * {
            padding-top: 30px;
          }
        `;

      case "bottom":
        return css`
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Cpath fill='%23FFF' d='M30 30L60 0H0z'/%3E%3C/svg%3E"),
            linear-gradient(to top, transparent 30px, black 30px);
          mask-size: 60px 30px, 100% 100%;
          mask-repeat: repeat-x, no-repeat;
          mask-position: bottom;

          & > * {
            padding-bottom: 30px;
          }
        `;

      case "both":
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

          & > * {
            padding-top: 30px;
            padding-bottom: 30px;
          }
        `;

      default:
        return null;
    }
  }}
`;
