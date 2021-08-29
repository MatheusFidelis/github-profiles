import { useState, useEffect } from 'react';
import {
  ContainerHome,
  HomeHeader,
  Username,
  SaveButton,
  ProfilePicture,
  Profile,
  ProfileName,
  Rectangle,
  Name,
  ProfileInfo,
  ProfileMail,
  ProfileTown,
  ProfileNumbers,
  Followers,
  Following,
  Repository,
  ProfileCategory,
  ContainerBio,
  Bio,
  Footer,
} from './styles';
import { FiLogOut } from 'react-icons/fi';

import Navbar from '../../components/Navbar';
import BackButton from '../../components/BackButton';

import { useHistory } from 'react-router';
import { useAuth } from '../../contexts/Auth';

import { useParams } from 'react-router-dom';

export default function AnotherUser() {
  const [_user, _setUser] = useState({});
  const history = useHistory();
  const { userId } = useParams();
  const { setUser } = useAuth();

  useEffect(() => {
    async function loadUser() {
      const response = await fetch(`https://api.github.com/users/${userId}`);
      const data = await response.json();
      _setUser(data);
    }
    loadUser();
  }, []);

  function handleClick() {
    localStorage.setItem('user', JSON.stringify(_user));
    setUser(_user);
    history.push('/home');
  }

  if (!_user?.login) {
    return null;
  }

  return (
    <>
      <ContainerHome>
        <HomeHeader>
          <BackButton />
          <Username>#{_user.login}</Username>
          <SaveButton onClick={handleClick}>
            Salvar
            <FiLogOut color="#5CBC29" size={19} style={{ 'margin-left': 12 }} />
          </SaveButton>
        </HomeHeader>

        <Profile>
          <ProfilePicture avatar_url={_user.avatar_url} />

          <ProfileName>
            <Rectangle style={{ 'margin-right': 14 }} />
            <Name>{_user.name}</Name>
          </ProfileName>

          <ProfileInfo>
            <ProfileMail>{_user.email}</ProfileMail>
            <ProfileTown style={{ 'margin-top': 5 }}>
              {_user.location}
            </ProfileTown>
          </ProfileInfo>

          <ProfileNumbers>
            <Followers>
              {_user.followers}
              <ProfileCategory>Seguidores</ProfileCategory>
            </Followers>
            <Following>
              {_user.following}
              <ProfileCategory>Seguindo</ProfileCategory>
            </Following>
            <Repository>
              {_user.public_repos}
              <ProfileCategory>Repos</ProfileCategory>
            </Repository>
          </ProfileNumbers>
        </Profile>

        <ContainerBio>
          <Rectangle style={{ 'margin-right': 14 }} />
          Bio
        </ContainerBio>
        <Bio>{_user.bio}</Bio>

        <Footer>
          <Navbar />
        </Footer>
      </ContainerHome>
    </>
  );
}
