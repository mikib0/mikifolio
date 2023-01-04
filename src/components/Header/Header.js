import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, NavDiv, Div3, NavLink } from './HeaderStyles';
import SocialIcons from '../../components/SocialIcons';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiCssdeck size='3rem' /> <span>mikibo</span>
        </a>
      </Link>
    </Div1>
    <NavDiv>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#journey'>
          <NavLink>My Journey</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#contact'>
          <NavLink>Get In Touch</NavLink>
        </Link>
      </li>
    </NavDiv>
    <Div3>
      <SocialIcons />
    </Div3>
  </Container>
);

export default Header;
