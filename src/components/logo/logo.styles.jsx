import styled, { css } from "styled-components";

import device from "../../assets/styles/media";

import { ReactComponent as LogoSVGFile } from "../../assets/logo/logo.svg";

const phoneHeight = css`
  @media ${device.tabPort} {
    height: 3rem;
    fill: black;
  }
`;

export const LogoSVG = styled(LogoSVGFile)`
  height: 4rem;
  fill: ${({ color }) => color};
  ${phoneHeight}
`;
