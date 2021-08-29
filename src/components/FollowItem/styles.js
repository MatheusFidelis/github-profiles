import styled from 'styled-components';

export const Container = styled.section`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 108px;
  width: 100%;
  border-bottom: 1px solid #7070705a;
`;

export const Rectangle = styled.div`
  height: 42px;
  width: 10px;
  background-color: #ffce00;
  border-right: #292929;
  border-radius: 0 10px 10px 0;
`;

export const ProfilePicture = styled.a`
  margin-left: 15px;
  margin-right: 32px;
  border: 3px solid #ffffff;
  width: 64px;
  height: 64px;
  border-radius: 100px;
  background-position: center;
  background-size: cover;
  background-image: url(${({ avatarUrl }) => avatarUrl});
  background-position: center;
  background-size: cover;
`;

export const FollowerName = styled.div`
  font-size: 16px;
  font-weight: Bold;
  line-height: 19px;
  color: #ffffff;
  height: 20px;
`;

export const FollowerLink = styled.a`
  margin-left: auto;
  margin-right: 0px;
  height: 40px;
  width: 50px;
`;
