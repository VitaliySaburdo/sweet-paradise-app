import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 53px;
  overflow: hidden;

  @media screen and (${props => props.theme.media.smToMd}) {
    width: 320px;
  }

  @media screen and (${props => props.theme.media.mdToLg}) {
    width: 768px;
    padding: 0 20px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    width: 1920px;
    padding: 0 250px;
  }
`;
