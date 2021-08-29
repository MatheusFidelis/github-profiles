import {
  Container,
  Rectangle,
  ProfilePicture,
  FollowerName,
  FollowerLink,
} from './styles';

import { FiArrowRight } from 'react-icons/fi';

export default function FollowContainer({ key, username, onClick, avatarUrl }) {
  return (
    <Container key={key} onClick={onClick}>
      <Rectangle />
      <ProfilePicture avatarUrl={avatarUrl} />
      <FollowerName>#{username}</FollowerName>
      <FollowerLink>
        <FiArrowRight
          color={'#FFFFFF'}
          size={'60%'}
          style={{ 'margin-top': 8 }}
        />
      </FollowerLink>
    </Container>
  );
}
