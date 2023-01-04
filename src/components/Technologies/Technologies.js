import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, SkillsDiv } from './TechnologiesStyles';
import Tech from '../Tech';
import { skills } from '../../constants/constants';

const Technologies = () => (
  <Section nopadding id='tech'>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have experience working with a variety of programming languages,
      frameworks, libraries, and tools. I am constantly seeking to expand my
      skillset and stay up-to-date with the latest technologies, so this list is
      by no means exhaustive. However, these are some of the technologies that I
      have significant experience with and am confident in using to build
      apps.
    </SectionText>
    <SkillsDiv>
      {skills.map((skill) => (
        <Tech name={skill.name} Icon={skill.icon} key={skill.name} />
      ))}
    </SkillsDiv>
  </Section>
);

export default Technologies;
