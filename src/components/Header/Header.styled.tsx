import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  top: 0;
  left: 0;
  max-width: ${props => props.theme.media.lg};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px 0;

  @media screen and (${props => props.theme.media.md}) {
    padding: 24px 0;
  }
  @media screen and (${props => props.theme.media.lg}) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
`;
