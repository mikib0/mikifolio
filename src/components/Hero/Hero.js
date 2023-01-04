import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <span style={{ WebkitTextFillColor: 'initial' }}>👋</span> Hi there,
        <br />
        I’m Ibrahim Jajere
      </SectionTitle>
      <SectionText>
        I am a frontend and mobile app developer with a passion for Javascript
        and ReactJS. I love digging down the rabbit hole to understand how
        things work under the hood and am always looking for ways to improve my
        skills and knowledge. In my free time, you can find me tinkering with
        new libraries and frameworks, or trying out the latest and greatest in
        web development.
      </SectionText>
      <Button
        onClick={() => (window.open('https://my.indeed.com/p/ibrahimi-zz1h8pg'))
        }>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;