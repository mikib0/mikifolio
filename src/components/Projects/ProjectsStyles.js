import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  ${'' /* height: 360px; */}
  object-fit: cover;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  ${'' /* grid-template-columns: 1fr; */}
  padding: 3rem;
  ${'' /* place-items: center; */}
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem .5rem;
    padding-bottom: .1rem;
  }
`;

export const ProjectsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const BlogCard = styled.div`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  ${'' /* width: 100; */}
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    box-shadow: 1px 1px 10px rgba(80, 78, 78, 0.5);
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 1rem;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  margin-bottom: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1rem;
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`

export const QuoteBlock = styled.div`
  margin: auto;
  max-width: 50rem;
`;

export const QuoteText = styled.p`
  font-style: italic;
  color: #cdd;
  text-align: center;
  line-height: 1.5;
  font-size: 4rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    line-height: 1;
    font-size: 3rem;
  }
`;

export const QuoteAuthor = styled.p`
  font-size: 1.7rem;
  color: #999;
  text-align: right;
`;