import styled from 'styled-components';

export const Container = styled.body`
  margin: 0 auto;
  background-color: #292929;
  width: 375px;
  height: 890px;
`;

export const RepositorysHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  background-color: #1f1f1f;
  margin-bottom: 41px;
`;

export const Quantity = styled.p`
  margin: 0 auto;
  margin-left: 81px;
  color: #ffffff;
  font-size: 17px;
  line-height: 24px;
  font-weight: Bold;
`;

export const RepoContainer = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  overflow: auto;
  height: 667px;
`;

export const Footer = styled.footer`
  position: absolute;
  top: 810px;
`;
