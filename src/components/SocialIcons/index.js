import React from 'react';
import {
  AiFillGithub,
  AiFillHeart,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import { FaDev } from 'react-icons/fa';
import { Link } from './styles';

const socials = [
  {
    url: 'https://github.com/mikib0',
    Icon: AiFillGithub,
  },
  {
    url: 'www.linkedin.com/in/ibrahim-isa-jajere',
    Icon: AiFillLinkedin,
  },
  {
    url: 'https://twitter.com/mi_ki_bo',
    Icon: AiFillTwitterCircle,
  },
  {
    url: 'https://dev.to/mikibo',
    Icon: FaDev,
  },
];

const SocialIcons = () => {
  return (
    <>
      {socials.map(({ url, Icon }) => (
        <Link href={url}>
          <Icon size='3rem' />
        </Link>
      ))}
    </>
  );
};

export default SocialIcons;
