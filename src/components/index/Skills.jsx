import React from 'react';
import {
  IconBrandCSharp, IconBrandDocker,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandKotlin, IconBrandNextjs,
  IconBrandPython,
  IconBrandReact,
  IconBrandAws,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandOpenai
} from '@tabler/icons-react';

import SectionTitle from '@/components/SectionTitle';
import { useWindowSize } from '@/hooks/useWindowSize';
import SkillIcons from '@/components/SkillIcons';

const programmingIcons = [
  {
    icon: IconBrandJavascript,
    className: 'text-yellow-500',
    tooltip: 'JavaScript',
    link: 'https://en.wikipedia.org/wiki/JavaScript'
  },
  {
    icon: IconBrandCSharp,
    className: 'text-blue-500',
    tooltip: 'C#',
    link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)'
  },
  {
    icon: IconBrandPython,
    className: 'text-green-500',
    tooltip: 'Python',
    link: 'https://en.wikipedia.org/wiki/Python_(programming_language)'
  },
  {
    icon: IconBrandReact,
    className: 'text-[#61DAFB]',
    tooltip: 'React',
    link: 'https://en.wikipedia.org/wiki/React_(software)'
  },
  {
    icon: IconBrandNextjs,
    className: 'text-zinc-200',
    tooltip: 'Next.js',
    link: 'https://en.wikipedia.org/wiki/Next.js'
  },
  {
    icon: IconBrandOpenai,
    className: 'text-[#412991]',
    tooltip: 'AI',
    link: 'https://en.wikipedia.org/wiki/Artificial_intelligence'
  },
  {
    icon: IconBrandKotlin,
    className: 'text-purple-500',
    tooltip: 'Kotlin',
    link: 'https://en.wikipedia.org/wiki/Kotlin_(programming_language)'
  },
  {
    icon: IconBrandMongodb,
    className: 'text-[#47A248]',
    tooltip: 'MongoDB',
    link: 'https://en.wikipedia.org/wiki/MongoDB'
  },
  {
    icon: IconBrandMysql,
    className: 'text-[#00758F]',
    tooltip: 'MySQL',
    link: 'https://en.wikipedia.org/wiki/MySQL'
  },
  {
    icon: IconBrandDocker,
    className: 'text-[#1D63ED]',
    tooltip: 'Docker',
    link: 'https://en.wikipedia.org/wiki/Docker_(software)'
  },
  {
    icon: IconBrandAws,
    className: 'text-[#FF9900]',
    tooltip: 'AWS',
    link: 'https://en.wikipedia.org/wiki/Amazon_Web_Services'
  },
  {
    icon: IconBrandGithub,
    className: 'text-[#181717]',
    tooltip: 'GitHub',
    link: 'https://en.wikipedia.org/wiki/GitHub'
  }
];

export default function Skills () {
  const windowSize = useWindowSize();

  return (
    <div className="index-section">
      <SectionTitle>Skills</SectionTitle>
      <p className="text-lg">
        I&apos;m passionate about building software and love working with C#, JavaScript, Python, and Kotlin. I develop across both the backend and frontend, and as a student, I&apos;m constantly leveling up my skills to stay sharp and industry-ready.
      </p>
      <SkillIcons icons={programmingIcons} windowSize={windowSize} />
    </div>
  );
}
