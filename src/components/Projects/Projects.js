import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, QuoteBlock, QuoteText, QuoteAuthor, ProjectsColumn } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const ProjectCard = ({ p }) => (
  <BlogCard>
    <Img src={p.image} />
    <TitleContent>
      <HeaderThree title>{p.title}</HeaderThree>
      <Hr />
    </TitleContent>
    <CardInfo>{p.description}</CardInfo>
    <div>
      {/* <TitleContent>Stack</TitleContent> */}
      <TagList>
        {p.tags.map((t, i) => {
          return <Tag key={i}>{t}</Tag>;
        })}
      </TagList>
    </div>
    <UtilityList>
      <ExternalLinks href={p.visit}>Link</ExternalLinks>
      <ExternalLinks href={p.source}>Source</ExternalLinks>
    </UtilityList>
  </BlogCard>
);

const Projects = () => {
  return (
    <Section nopadding id='projects'>
      <SectionDivider divider colorAlt />
      <SectionTitle>Projects</SectionTitle>
      <QuoteBlock>
        <QuoteText>
          <span>"What I cannot create,</span> <br />{' '}
          <span>I do not understand"</span>
        </QuoteText>
        <QuoteAuthor>— Richard Feynman</QuoteAuthor>
      </QuoteBlock>

      <GridContainer>
        <ProjectsColumn>
          {projects
            .filter((e, i) => i % 2 == 0)
            .map((p, i) => {
              return <ProjectCard key={i} p={p} />;
            })}
        </ProjectsColumn>
        <ProjectsColumn>
          {projects
            .filter((e, i) => i % 2 != 0)
            .map((p, i) => {
              return <ProjectCard key={i} p={p} />;
            })}
        </ProjectsColumn>
      </GridContainer>
    </Section>
  );
};

export default Projects;