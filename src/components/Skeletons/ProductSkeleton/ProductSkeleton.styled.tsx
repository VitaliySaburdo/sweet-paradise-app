import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 345px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 394px;
  }
`;
export const Img = styled.div`
  width: 236px;
  height: 236px;
  margin-bottom: 13px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 320px;
    height: 430px;
  }
`;
export const Title = styled.h3`
  height: 26px;
  width: 200px;
  margin-bottom: 18px;
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-bottom: 12px;
  }
`;

export const Text = styled.div`
  width: 220px;
  height: 50px;
  margin-bottom: 19px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 100%;
  }
`;

export const Params = styled.div`
  width: 129px;
  height: 20px;
  margin-bottom: 29px;
`;
