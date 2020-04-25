import styled, { css } from "styled-components";

import device from "../../assets/styles/media";

import { ReactComponent as LogoWhiteSVG } from "../../assets/logo/logo-white.svg";

const phoneHeight = css`
  @media ${device.phone} {
    height: 3rem;
    fill: black;
  }
`;

export const LogoSVG = styled(LogoWhiteSVG)`
  height: 4rem;
  fill: ${({ color }) => color};
  ${phoneHeight}
`;
