import { FiUsers } from 'react-icons/fi';
import { BiHomeAlt } from 'react-icons/bi';
import { RiGithubLine } from 'react-icons/ri';
import { Navbar, NavbarLink, NavbarIcon, NavbarText } from './styles';

export default function Nav({ activeLink }) {
  return (
    <Navbar>
      <NavbarLink to="/home">
        <NavbarIcon>
          <BiHomeAlt
            color={activeLink === 'home' ? '#000000' : '#a5a5a5'}
            size={'100%'}
          />
        </NavbarIcon>
        <NavbarText color={activeLink === 'home' ? '#000000' : '#a5a5a5'}>
          Home
        </NavbarText>
      </NavbarLink>

      <NavbarLink to="/repos">
        <NavbarIcon>
          <RiGithubLine
            color={activeLink === 'repos' ? '#000000' : '#a5a5a5'}
            size={'100%'}
          />
        </NavbarIcon>
        <NavbarText color={activeLink === 'repos' ? '#000000' : '#a5a5a5'}>
          Repos
        </NavbarText>
      </NavbarLink>

      <NavbarLink to="/followers">
        <NavbarIcon>
          <FiUsers
            color={activeLink === 'followers' ? '#000000' : '#a5a5a5'}
            size={'100%'}
          />
        </NavbarIcon>
        <NavbarText color={activeLink === 'followers' ? '#000000' : '#a5a5a5'}>
          Seguidores
        </NavbarText>
      </NavbarLink>

      <NavbarLink to="/following">
        <NavbarIcon>
          <FiUsers
            color={activeLink === 'following' ? '#000000' : '#a5a5a5'}
            size={'100%'}
          />
        </NavbarIcon>
        <NavbarText color={activeLink === 'following' ? '#000000' : '#a5a5a5'}>
          Seguindo
        </NavbarText>
      </NavbarLink>
    </Navbar>
  );
}
