import React from 'react';

import PageInfo from '@/components/PageInfo';
import ProjectCard from '@/components/ProjectCard';
import PageTitle from '@/components/PageTitle';
import Link from '@/components/Link';
import routerWebLed from '@/../public/images/projects/router-web-led.webp';

import wesmart from '@/../public/images/projects/wesmart.jpg';
import youngliving from '@/../public/images/projects/youngliving.jpg';
import xrpNft from '@/../public/images/projects/xrp-nft.jpg';
import sensely from '@/../public/images/projects/sensely.jpg';
import techFindersHub from '@/../public/images/projects/techfindershub.jpg';
import trade from '@/../public/images/projects/trade.jpg';

const projects = [
  {
    name: 'YoungLiving',
    description: <></>,
    image: youngliving,
    link: 'https://youngliving.com'
  },
  {
    name: 'WeSmart',
    description: <></>,
    image: wesmart,
    link: 'https://wesmart.com'
  },
  {
    name: 'XRPNFT',
    description: <></>,
    image: xrpNft,
    link: 'https://xrpnft.com'
  },
  {
    name: 'Sensely',
    description: <></>,
    image: sensely,
    link: 'https://sensely.com'
  },
  {
    name: 'TechFindersHub',
    description: <></>,
    image: techFindersHub,
    link: 'https://techfindershub.com'
  },
  {
    name: 'FundedNext',
    description: <></>,
    image: trade,
    link: 'https://fundednext.com'
  }
];

const checkOutVariations = [
  'Check Out',
  'Go See',
  'Take A Look',
  'Look Now'
];

const pickRandom = (arr, n) => {
  const shuffled = arr.sort(() => Math.random() - 0.5);

  return Array.from({ length: n }, (_, i) => shuffled[i % shuffled.length]);
};

export default function Projects () {
  const randomVariations = pickRandom(checkOutVariations, projects.length);

  return (
    <>
      <PageInfo description="Projects made by me" title="Projects - Daniel Rosado" />
      <PageTitle>Projects</PageTitle>
      <p className="text-lg mb-4">
        This is a list of my favourite project made by me. See more on my&nbsp;
        <Link isExternal href="https://github.com/Moana1587?tab=repositories">GitHub</Link>.
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-5">
        {
          projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              checkOutVariation={randomVariations[index]}
              description={project.description}
              image={project.image}
              link={project.link}
              name={project.name}
            />
          ))
        }
      </div>
    </>
  );
}
