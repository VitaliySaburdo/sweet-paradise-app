import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.footer`
padding-top:40px;
padding-bottom:40px;
    background-color: #9C0746;
`
export const StyledLogoLink = styled(Link)`
display: block;
color: #FFF;
font-family: Sail;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 20px;
text-align: center;
`
export const StyledPhoneLink = styled(Link)`
display: block;
color: #FFF;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 32px;
text-align: center;
`
export const Text = styled.p`
color: #FFF;
font-family: Open Sans;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: center;
`