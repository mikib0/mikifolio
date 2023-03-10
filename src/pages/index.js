import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Journey from '../components/Journey';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
      <Hero />
      <BgAnimation />
      </Section>
      <Technologies />
      <Projects />
      <Journey />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
