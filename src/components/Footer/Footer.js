import React from 'react';
import {
  AiFillHeart,
} from 'react-icons/ai';

import SocialIcons from '../../components/SocialIcons'
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, FooterDiv } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id='contact'>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:ibrahimisajajere274@gmail.com'>
            ibrahimisajajere274@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <FooterDiv>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span>Made with</span>
          <AiFillHeart size='2.4rem' color='#dc2626' />
        </div>
        <SocialContainer>
          <SocialIcons />
        </SocialContainer>
      </FooterDiv>
    </FooterWrapper>
  );
};

export default Footer;
