import {
  Container,
  RepositoryName,
  Rectangle,
  RepositoryInfo,
  RepositoryIcons,
  RepositoryFavs,
  FavsQuantity,
  RepositoryStatus,
  LockButton,
} from './styles';

import { FiUnlock, FiLock } from 'react-icons/fi';
import { HiOutlineStar } from 'react-icons/hi';

export default function RepoItem({ key, title, description, stars }) {
  return (
    <Container key={key}>
      <RepositoryName>
        <Rectangle style={{ 'margin-right': 16 }} />
        {title}
      </RepositoryName>

      <RepositoryInfo>{description}</RepositoryInfo>

      <RepositoryIcons>
        <RepositoryFavs>
          <HiOutlineStar color={'#FFCE00'} size={21} />
          <FavsQuantity>{stars}</FavsQuantity>
        </RepositoryFavs>

        <RepositoryStatus>
          <LockButton>
            <FiUnlock color={'#63BF1F'} size={21} />
          </LockButton>
          <LockButton>
            <FiLock color={'#CC042A'} size={21} />
          </LockButton>
        </RepositoryStatus>
      </RepositoryIcons>
    </Container>
  );
}
