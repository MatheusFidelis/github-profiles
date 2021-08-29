import styled from 'styled-components';

export const ContainerHome = styled.body`
  margin: 0 auto;
  background-color: #292929;
  width: 375px;
  height: 890px;
`;

export const HomeHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: line;
  justify-content: space-between;
  padding-top: 23px;
  padding-bottom: 82px;
  background-color: #1f1f1f;
`;

export const Username = styled.a`
  margin-left: 11px;
  color: #ffffff;
  font-size: 17px;
  line-height: 24px;
  font-weight: Bold;
`;

export const SaveButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  margin-right: 19px;

  color: #ffffff;
  font-size: 17px;
  line-height: 24px;
  font-weight: 300;
`;

export const Profile = styled.section`
  height: 100%auto;
`;

export const ProfilePicture = styled.div`
  margin: -57.5px auto 39px auto;
  border: 3px solid #ffffff;
  width: 115px;
  height: 115px;
  border-radius: 100px;
  background-image: url(${({ avatar_url }) => avatar_url});
  background-position: center;
  background-size: cover;
  background-position: center;
  background-size: cover;
`;

export const ProfileName = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  margin-right: 24px;
`;

export const Rectangle = styled.div`
  height: 42px;
  width: 10px;
  background-color: #ffce00;
  border-right: #292929;
  border-radius: 0 10px 10px 0;
`;

export const Name = styled.div`
  text-transform: uppercase;
  font-size: 26px;
  font-weight: Bold;
  color: #ffffff;
`;

export const ProfileInfo = styled.div`
  margin-left: 24px;
  font-size: 18px;
  font-weight: 100;
  color: #ffffff;
`;

export const ProfileMail = styled.a`
  text-decoration: none;
  font-weight: 100;
`;

export const ProfileTown = styled.div``;

export const ProfileNumbers = styled.div`
  margin-top: 44px;
  height: 97px;
  background-color: #5252525d;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffffff;
  font-size: 40px;
  font-weight: Bold;
`;

export const Followers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Following = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Repository = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 19px;
`;

export const ProfileCategory = styled.div`
  font-size: 17px;
  font-weight: 100;
  color: #ffffff;
  text-transform: capitalize;
`;

export const ContainerBio = styled.section`
  margin-top: 47px;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 26px;
  font-weight: Bold;
  text-transform: uppercase;
`;

export const Bio = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 100;
  margin: 9px 18px auto 25px;
`;

export const Footer = styled.footer`
  position: absolute;
  top: 810px;
`;
