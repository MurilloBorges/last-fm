import styled from 'styled-components';

import colors from './colors';

// MAIN CONTAINER

interface MainContainerProps {
  backgroundColor?: string;
  minHeight?: string;
  padding?: string;
  paddingIpadPro?: string;
}

export const MainContainer = styled.div<MainContainerProps>`
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.white};
  min-height: ${props => (props.minHeight ? props.minHeight : 'auto')};
  padding: ${props => (props.padding ? props.padding : '0')};
  width: 100%;

  @media only screen and (max-width: 1024px) {
    padding: ${props => (props.paddingIpadPro ? props.paddingIpadPro : '0')};
  }
`;

interface ContainerProps {
  backgroundColor?: string;
  display?: string;
  flexFlow?: string;
  margin?: string;
  maxWidth?: string;
  padding?: string;
  paddingIpad?: string;
}

export const Container = styled.div<ContainerProps>`
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.transparent};
  display: ${props => (props.display ? props.display : 'block')};
  flex-flow: ${props => (props.flexFlow ? props.flexFlow : 'row wrap')};
  margin: ${props => (props.margin ? props.margin : '0 auto')};
  max-width: ${props => (props.maxWidth ? props.maxWidth : '1292px')};
  padding: ${props => (props.padding ? props.padding : '0 32px 2em')};
  position: relative;
  width: 100%;
  @media all and (max-width: 1023px) {
    padding: ${props =>
      props.paddingIpad ? props.paddingIpad : '25px 20px 2em'};
    width: 100%;
  }
`;

interface ContainerHeaderProps {
  margin?: string;
  paddingIpadPro?: string;
  marginIpadPro?: string;
  marginIpad?: string;
}

export const ContainerHeader = styled.div<ContainerHeaderProps>`
  display: flex;
  flex-flow: column wrap;
  margin: ${props => (props.margin ? props.margin : '0')};
  width: 100%;

  @media only screen and (max-width: 1024px) {
    padding: ${props => (props.paddingIpadPro ? props.paddingIpadPro : '0')};
    margin: ${props => (props.marginIpadPro ? props.marginIpadPro : '0')};
  }

  @media all and (max-width: 768px) {
    margin: ${props => (props.marginIpad ? props.marginIpad : '0')};
  }
`;

export const ContainerBody = styled.div`
  display: inline-flex;
`;

interface BtnGlobalProps {
  alignItems?: string;
  alignSelf?: string;
  backgroundColor?: string;
  borderBottomWidth?: string;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  display?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  justifyContent?: string;
  letterSpacing?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
  textShadow?: string;
  textTransform?: string;
  verticalAlign?: string;
  width?: string;
  borderRadiusIpad?: string;
  fontSizeIpad?: string;
  marginIpad?: string;
  heightIpad?: string;
  widthIpad?: string;
}

export const BtnGlobal = styled.button<BtnGlobalProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  align-self: ${props => (props.alignSelf ? props.alignSelf : 'initial')};
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.primary};
  border-bottom-width: ${props =>
    props.borderBottomWidth ? props.borderBottomWidth : '0'};
  border-color: ${props =>
    props.borderColor ? props.borderColor : colors.transparent};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '5px')};
  border-style: solid;
  border-width: ${props => (props.borderWidth ? props.borderWidth : '0')};
  color: ${props => (props.color ? props.color : colors.white)};
  display: ${props => (props.display ? props.display : 'flex')};
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'initial')};
  height: ${props => (props.height ? props.height : '40px')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'space-evenly'};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : '1px'};
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '0')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'initial')};
  text-shadow: ${props =>
    props.textShadow ? props.textShadow : '0 0 0 transparent'};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : 'uppercase'};

  ${props =>
    props.verticalAlign ? `vertical-align: ${props.verticalAlign}` : null};
  width: ${props => (props.width ? props.width : '150px')};
  :hover {
    opacity: 0.8;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media screen and (max-width: 767px) {
    border-radius: ${props =>
      props.borderRadiusIpad ? props.borderRadiusIpad : '4px'};
    font-size: ${props => (props.fontSizeIpad ? props.fontSizeIpad : '12px')};
    margin: ${props => (props.marginIpad ? props.marginIpad : '0')};
    height: ${props => (props.heightIpad ? props.heightIpad : '35px')};
    width: ${props => (props.widthIpad ? props.widthIpad : '80px')};
    &.forgot {
      font-size: 9px;
    }
  }
  &.btnIcon {
    &[disabled] {
      background: ${colors.transparent};
      color: ${colors.light};
      cursor: not-allowed;
    }
    @media screen and (max-width: 767px) {
      width: auto;
    }
  }
  &.clean {
    transition: width 0.4s;
    visibility: hidden;
    width: 0;
    &.animatedBtn {
      visibility: visible;
      width: 60px;
    }
  }
`;

interface SubtitleProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  fontSizeIpad?: string;
}

export const Subtitle = styled.h4<SubtitleProps>`
  color: ${props => (props.color ? props.color : colors.dark)};
  font-size: ${props => (props.fontSize ? props.fontSize : '1.2rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  margin: ${props => (props.margin ? props.margin : '0.5rem 0 0;')};

  @media screen and (max-width: 768px) {
    font-size: ${props => (props.fontSizeIpad ? props.fontSizeIpad : '1.2rem')};
  }
`;

interface H2Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  margin?: string;
  textAlign?: string;
  fontSizeIpadPro?: string;
  marginIpadPro?: string;
  fontSizeIpad?: string;
  marginIpad?: string;
}

export const H2 = styled.h2<H2Props>`
  color: ${props => (props.color ? props.color : colors.dark)};
  font-size: ${props => (props.fontSize ? props.fontSize : '2rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '600')};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : 1)}px;
  margin: ${props => (props.margin ? props.margin : '0')};
  text-align: ${props => (props.textAlign ? props.textAlign : null)};
  width: 100%;

  @media only screen and (max-width: 1024px) {
    font-size: ${props =>
      props.fontSizeIpadPro ? props.fontSizeIpadPro : '2.2rem'};
    margin: ${props => (props.marginIpadPro ? props.marginIpadPro : '0')};
  }

  @media only screen and (max-width: 768px) {
    font-size: ${props => (props.fontSizeIpad ? props.fontSizeIpad : '1.2rem')};
    margin: ${props => (props.marginIpad ? props.marginIpad : '0')};
  }
`;

interface H4Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  textAlign?: string;
  width?: string;
  fontSizeIpad?: string;
}

export const H4 = styled.h4<H4Props>`
  color: ${props => (props.color ? props.color : colors.dark)};
  font-size: ${props => (props.fontSize ? props.fontSize : '1.5rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'bold')};
  letter-spacing: 1px;
  margin: ${props => (props.margin ? props.margin : '0')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  width: ${props => (props.width ? props.width : 'auto')};

  @media screen and (max-width: 768px) {
    font-size: ${props => (props.fontSizeIpad ? props.fontSizeIpad : '1.2rem')};
  }
`;

// UTILITÁRIOS

export const Br = styled.br``;

// Loading Shimmer
interface ShimmerLoadingProps {
  height?: string;
  minHeightMobile?: string;
}

export const ShimmerLoading = styled.div<ShimmerLoadingProps>`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  display: inline-block;
  min-height: ${props => (props.height ? props.height : '265px')};
  position: relative;
  width: 100%;

  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }
  @media screen and (max-width: 767px) {
    min-height: ${props =>
      props.minHeightMobile ? props.minHeightMobile : '175px'};
  }
`;
