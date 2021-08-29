import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Container,
  FollowersHeader,
  FollowContainer,
  Quantity,
  Footer,
} from './styles';
import Navbar from '../../components/Navbar';
import BackButton from '../../components/BackButton';
import FollowItem from '../../components/FollowItem';

import { useAuth } from '../../contexts/Auth';

import { useHistory } from 'react-router-dom';

export default function Followers() {
  const { user } = useAuth();
  const history = useHistory();
  const [followers, setFollowers] = useState([]);

  const renderFollowers = useMemo(() => {
    return (
      <FollowContainer>
        {followers?.map((follower) => (
          <FollowItem
            key={follower.id}
            username={follower.login}
            avatarUrl={follower.avatar_url}
            onClick={() => history.push(`/user/${follower.login}`)}
          />
        ))}
      </FollowContainer>
    );
  }, [followers]);

  useEffect(() => {
    async function loadFollowers() {
      const response = await fetch(
        `https://api.github.com/users/${user.login}/followers`
      );
      const data = await response.json();
      setFollowers(data);
    }
    loadFollowers();
  }, [user]);

  return (
    <>
      <Container>
        <FollowersHeader>
          <BackButton />

          <Quantity>{user.followers} seguidores</Quantity>
        </FollowersHeader>

        {renderFollowers}

        <Footer>
          <Navbar activeLink="followers" />
        </Footer>
      </Container>
    </>
  );
}
