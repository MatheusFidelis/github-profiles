import {
  Container,
  HomeHeader,
  Username,
  Logout,
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
import { useAuth } from '../../contexts/Auth';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export default function Home() {
  const history = useHistory();
  const { user, SignOut } = useAuth();
  console.log('user da home:' + user);

  function handleClick() {
    SignOut();
    history.push('/');
  }

  return (
    <>
      <Container>
        <HomeHeader>
          <Username>#{user.login}</Username>
          <Logout onClick={handleClick}>
            Sair
            <FiLogOut color="#D03434" size={19} style={{ 'margin-left': 12 }} />
          </Logout>
        </HomeHeader>

        <Profile>
          <ProfilePicture avatar_url={user.avatar_url} />

          <ProfileName>
            <Rectangle style={{ 'margin-right': 14 }} />
            <Name>{user.name}</Name>
          </ProfileName>

          <ProfileInfo>
            <ProfileMail>{user.email}</ProfileMail>
            <ProfileTown style={{ 'margin-top': 5 }}>
              {user.location}
            </ProfileTown>
          </ProfileInfo>

          <ProfileNumbers>
            <Followers to="followers">
              {user.followers}
              <ProfileCategory>Seguidores</ProfileCategory>
            </Followers>
            <Following to="following">
              {user.following}
              <ProfileCategory>Seguindo</ProfileCategory>
            </Following>
            <Repository to="repos">
              {user.public_repos}
              <ProfileCategory>Repos</ProfileCategory>
            </Repository>
          </ProfileNumbers>
        </Profile>

        <ContainerBio>
          <Rectangle style={{ 'margin-right': 14 }} />
          Bio
        </ContainerBio>
        <Bio>{user.bio}</Bio>

        <Footer>
          <Navbar activeLink="home" />
        </Footer>
      </Container>
    </>
  );
}
