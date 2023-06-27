import {
  SiReact,
  SiHtml5,
  SiBootstrap,
  SiCss3,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJava,
  SiJavascript,
  SiNodedotjs,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiVite,
  SiPnpm,
  SiExpress,
  SiMongodb,
} from 'react-icons/si';

import { TbBrandReactNative } from 'react-icons/tb';
import { BsTerminalFill } from 'react-icons/bs';

export const projects = [
  {
    title: 'Nile LMS',
    description: 'A university hostel laundry management system',
    image: '/images/lms.png',
    tags: ['React', 'Express', 'MySQL'],
    source: 'https://github.com/mikib0/lms',
    visit: 'http://nilelms.eastus.cloudapp.azure.com/',
  },
  {
    title: 'Fortisman',
    description:
      'A React Native mobile app for tracking different detoxes and keeping a journal of relapses.',
    image: '/images/fortisman.png',
    tags: ['React', 'React Native', 'Redux'],
    source: 'https://github.com/mikib0/fortisman',
    visit: 'https://expo.dev/artifacts/eas/6g8xSYiF1kMQgjP364FtRQ.apk',
  },
  {
    title: 'News Portal',
    description:
      'A website made with react that fetches news data from an API and display news headlines and weather forecast all tailored base on the location of the user.',
    image: '/images/news_portal.png',
    tags: ['Javascript', 'React', 'React Router'],
    source: 'https://github.com/mikib0/news-portal',
    visit: 'https://mikinews.netlify.app',
    id: 0,
  },
  {
    title: 'Quran',
    description:
      'Quran web app including recitation and translation. I used bootstrap for the styling and react router for routing in this project. Most importantly i get all the data from the quran api (quran.api-docs.io)',
    image: '/images/quran_app.png',
    tags: ['React', 'JavaScript', 'react-router'],
    source: 'https://github.com/mikib0/quran',
    visit: 'https://miki-quran.netlify.app/',
    id: 1,
  },
  {
    title: 'chappie',
    description:
      'What would it be like chatting with chatGPT in the way we are used to chatting with each other in platforms like WhatsApss or Telegram?, I thought. Chappie is a Telegram bot that leverages the OpenAI API to provide users with a meaningful response in a human like conversational manner. It uses the same language model as chatGPT.',
    image: '/images/el_chappie.png',
    tags: ['Javascript', 'Node', 'Express', 'Mongo'],
    source: 'https://github.com/mikib0/chappie',
    visit: 'https://t.me/gpt3_tgBot',
    id: 0,
  },
  {
    title: 'Tweet Remover',
    description:
      "I hated seeing the tweets of someone on tweeter and at the same time i didn't want to unfollow or block him. So i created tweet-remover, a browser extension that removes the tweet and retweets of people you don't like.",
    image: '/images/tweet_blocker.png',
    tags: ['Javascript', 'html', 'css'],
    source: 'https://github.com/mikib0/tweet-remover',
    visit: 'https://addons.mozilla.org/en-US/firefox/addon/tweet-remover/',
    id: 2,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Discovered programming' },
  {
    year: '2018-19',
    text: 'Roughly learned HTML&CSS during school holidays',
  },
  { year: 2020, text: 'Taught myself Java (Java is awesome🤓)' },
  { year: '2021', text: 'Started learning web development' },
];

export const skills = [
  {
    name: 'react js',
    icon: SiReact,
  },
  {
    name: 'javascript',
    icon: SiJavascript,
  },
  {
    name: 'react native',
    icon: TbBrandReactNative,
  },
  {
    name: 'html 5',
    icon: SiHtml5,
  },
  {
    name: 'css 3',
    icon: SiCss3,
  },
  {
    name: 'node js',
    icon: SiNodedotjs,
  },
  {
    name: 'express',
    icon: SiExpress,
  },
  {
    name: 'mongodb',
    icon: SiMongodb,
  },
  {
    name: 'figma',
    icon: SiFigma,
  },
  {
    name: 'git',
    icon: SiGit,
  },
  {
    name: 'github',
    icon: SiGithub,
  },
  {
    name: 'react-router',
    icon: SiReactrouter,
  },
  {
    name: 'react-redux',
    icon: SiRedux,
  },

  {
    name: 'tailwind css',
    icon: SiTailwindcss,
  },
  {
    name: 'java',
    icon: SiJava,
  },
  {
    name: 'bootstrap',
    icon: SiBootstrap,
  },
  {
    name: 'terminal',
    icon: BsTerminalFill,
  },
  {
    name: 'firebase',
    icon: SiFirebase,
  },
  {
    name: 'vite',
    icon: SiVite,
  },
  {
    name: 'pnpm',
    icon: SiPnpm,
  },
];
