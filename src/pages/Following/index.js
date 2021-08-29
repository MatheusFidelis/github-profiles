import { useEffect, useState, useMemo } from 'react';
import {
  Container,
  FollowingHeader,
  FollowContainer,
  Quantity,
  Footer,
} from './styles';
import Navbar from '../../components/Navbar';
import BackButton from '../../components/BackButton';
import FollowItem from '../../components/FollowItem';

import { useAuth } from '../../contexts/Auth';
import { useHistory } from 'react-router-dom';

export default function Following() {
  const { user } = useAuth();
  const history = useHistory();
  const [following, setFollowing] = useState([]);

  const renderFollowing = useMemo(() => {
    return (
      <FollowContainer>
        {following?.map((following) => (
          <FollowItem
            key={following.id}
            username={following.login}
            avatarUrl={following.avatar_url}
            onClick={() => history.push(`/user/${following.login}`)}
          />
        ))}
      </FollowContainer>
    );
  }, [following]);

  useEffect(() => {
    async function loadFollowing() {
      const response = await fetch(
        `https://api.github.com/users/${user.login}/following`
      );
      const data = await response.json();
      setFollowing(data);
    }
    loadFollowing();
  }, [user]);
  return (
    <>
      <Container>
        <FollowingHeader>
          <BackButton />

          <Quantity>Seguindo {user.following}</Quantity>
        </FollowingHeader>

        {renderFollowing}
        <Footer>
          <Navbar activeLink="following" />
        </Footer>
      </Container>
    </>
  );
}
