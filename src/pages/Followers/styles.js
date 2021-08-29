import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  background-color: #292929;
  width: 375px;
  height: 890px;
`;

export const FollowersHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;

  background-color: #1f1f1f;
  margin-bottom: 12.5px;
`;

export const Quantity = styled.p`
  margin: 0 auto;
  margin-left: 81px;
  color: #ffffff;
  font-size: 17px;
  line-height: 24px;
  font-weight: Bold;
`;

export const FollowContainer = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  overflow: auto;
  height: 730px;
`;

export const Footer = styled.footer`
  position: absolute;
  top: 810px;
`;
