import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  column-gap: 20px;
  margin-bottom: 20px;
`;

export const MainTitle = styled.h2`
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #444251;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Text = styled.p`
  color: #444251;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Title = styled.h3`
  color: #9c0746;
  font-family: Montserrat;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
`;

export const PhoneContainer = styled.ul`
  display: grid;
  grid-template-columns: [first] 240px [line2] 240px;
  row-gap: 20px;
`;

export const SocialContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ScheduleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const AddressContainer = styled.div`
  margin-bottom: 20px;
`;

export const City = styled.span`
  color: #444251;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const IconContainer = styled.svg`
  margin-right: 5px;
`;
