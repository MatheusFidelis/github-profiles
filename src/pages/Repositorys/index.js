import { useState, useMemo, useEffect } from 'react';
import {
  Container,
  RepositorysHeader,
  Quantity,
  Footer,
  RepoContainer,
} from './styles';

import Navbar from '../../components/Navbar';
import BackButton from '../../components/BackButton';
import RepoItem from '../../components/RepoItem';

import { useAuth } from '../../contexts/Auth';

export default function Home() {
  const { user } = useAuth();
  const [repos, setRepos] = useState([]);

  const renderRepos = useMemo(() => {
    return (
      <RepoContainer>
        {repos.map((repo) => (
          <RepoItem
            key={repo.id}
            title={repo.name}
            description={repo.description}
            stars={repo.stargazers_count}
          />
        ))}
      </RepoContainer>
    );
  }, [repos]);

  useEffect(() => {
    async function loadRepos() {
      const response = await fetch(
        `https://api.github.com/users/${user.login}/repos`
      );
      const data = await response.json();
      setRepos(data);
    }
    loadRepos();
  }, [user]);
  return (
    <>
      <Container>
        <RepositorysHeader>
          <BackButton />
          <Quantity>{user.public_repos} repositórios</Quantity>
        </RepositorysHeader>

        {renderRepos}

        <Footer>
          <Navbar activeLink="repos" />
        </Footer>
      </Container>
    </>
  );
}
