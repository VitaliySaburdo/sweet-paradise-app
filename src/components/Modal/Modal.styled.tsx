import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden auto;
  z-index: 1000;
  background-color: #61616199;
`;

export const ModalBody = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 95vw;

  padding: 44px 20px 16px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  background-color: #FFFFFF;

  @media screen and (${props => props.theme.media.sm}) {
    width: 280px;
  }

  @media screen and (${props => props.theme.media.md}) {
    padding: 32px 32px 24px;
    width: 681px;
    height: 540px;
  }

  @media screen and (${props => props.theme.media.lg}) {
  }
`;

