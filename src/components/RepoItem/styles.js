import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 151.5px;
  border-bottom: 1px solid #7070705a;
  margin-bottom: 20.5px;
`;

export const Rectangle = styled.div`
  height: 42px;
  width: 10px;
  background-color: #ffce00;
  border-right: #292929;
  border-radius: 0 10px 10px 0;
`;

export const RepositoryName = styled.div`
  display: flex;
  align-items: center;

  font-size: 20px;
  font-weight: Bold;
  color: #ffffff;

  margin-bottom: 2px;
  height: 42px;
`;

export const RepositoryInfo = styled.div`
  margin-left: 28px;
  font-size: 15px;
  font-weight: 100;
  color: #ffffff;
`;

export const RepositoryIcons = styled.div`
  display: flex;
  flex-direction: line;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  margin-top: 13px;
  margin-bottom: 34.5px;
  margin-left: 28px;
  margin-right: 10.55px;
`;

export const RepositoryFavs = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: transparent;
  padding: 0px;
  height: 100%;
`;

export const FavsQuantity = styled.p`
  color: #ffffff;
  font-size: 15px;
  margin-left: 6.5px;
`;

export const RepositoryStatus = styled.p`
  display: flex;
  align-items: center;
`;

export const LockButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: transparent;
  padding: 0px;
  height: 100%;
  margin-left: 13.65px;
`;
