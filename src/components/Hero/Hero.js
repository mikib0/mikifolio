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
        I'm a full stack MERN developer, who is always looking for ways to
        create value and solve problems for his clients and colleagues. I have a
        strong proficiency in Node.js, Express, MongoDB & React.js and enjoy
        using my skills to build intuitive, user-friendly web and mobile
        applications that meet the needs and expectations of my users.
        {/* I am a frontend and mobile
        app developer with a passion for Javascript and ReactJS. I love digging
        down the rabbit hole to understand how things work under the hood and am
        always looking for ways to improve my skills and knowledge. In my free
        time, you can find me tinkering with new libraries and frameworks, or
        trying out the latest trends in web development. */}
      </SectionText>
      <Button
        onClick={() =>
          window.open(
            'https://s3.amazonaws.com/attachments.angel.co/8680923-12f846b824efe6140299a5207aebe1ab.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATAVHNKYQZB56I27M%2F20230627%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230627T124755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLL%2B7mKmth7K1%2BfcbkrKNnnEjyrDhJVY9pjfcf1wunWAIhAIWi8wuKkBJiXD9O7dFwjmYx7H0nt500ZNmtM9JCOI3KKooFCF4QABoMMjA3NTgzMjcwNDMzIgwBUpB9ljoy3g6a8oEq5wSo9aJh8r21n7HOKcqVhf3hYT1b7ESiUEaaekcE5mtae9yPvk8XULAzhAnSxmwUGdPc2jU9CqzYlnh8f%2Br5DKIF0z1m5IgercaZ2VFOc7VmLdki9wzZllaACGwCe0PiAlP3c%2BiDUNpnV6Px5Wq%2BmYjuGfcTSLXTzJvQNLgmYGeH0YhuHBC2LqYLRcPQLUSvm9D%2FEaKpvouIduj%2B1c6ZVXEWArzMbMlQCoeO2HKMYowkn70IMMJfP1Nq5fbXcDF0eKnhO6DYm9TiVr%2BYhiO1pM7n5N6%2F6ke10PNeCpTvt7mZ%2FJWtZ6MetakZg7ptelQ9%2Fhx1x08Wr7ZYoA%2B2vgjafNNkZGogBB%2B1yQo8GGR4VAGrLvNWXU%2FXa43VlJawtBPb7pmKzqZCb%2FhWDEF9pdCZhmkrOoq%2BRk6WuIGo%2B3rlEqLLt1WKrLBlfmbHN0JP%2Bxe6vpOy73FbqPE%2BGiN%2BQccQYHXC3jj%2BgM%2BoMHJAknMWs6U6pPBALVAqVx%2BPapeUK%2BH58hsBzIZ7ywhzy6siaoX6s7n7SdLd6nKBXejKVdKqKv6JqEpEgGr6w7EA8uuYlct%2FELOi4M82GWPh0jN2YpvGNiOY9JLGfeZ2RQaE79Fb24Cah%2FXoqIaLAd3i0Gd4bPGQLNogImf8dhAyIPqtVmpq3dysIFpShnMdGQHLIeZtKcXCVkzVs9cQTE7PNcXHDfr47BtF%2FrrXdeyg9CCDK10Hl3akudH0ldiNyUWdoMyzoqBgpuTWfts0GSAQ17vAlRtOQz%2FvkqieMYWPCUa8BH0PNi4eH6dTbBUbYbmZiKrRiyzre4hBFDFEypMw0KnrpAY6mQG9gF89ybXWriYUPEdehODGNSXU4FyU797NO9QHFoU8Eg3NFbujnCDT33HCHAOzUbfNr2nQBWL%2FgkvZ6zPUpuhyAODUPUz4aBAKEaPSoyf5Jhll2mFu2Kac5qfEzT5tMoVqTRCL1syua%2FBbfUepsrZTpI1AjV%2FMEHdbUSiiFSvbOJ4lhc6zj%2B3K2Z9M6XxDSUIvRv79kSdp9X4%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=c7278e889de2a51025ca256afb11a9962e9c4a5fdffc3ca79e33b9a025fe3610'
          )
        }>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;