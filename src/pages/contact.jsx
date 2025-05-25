import React, { useEffect, useState } from 'react';
import { Button, Snippet } from '@heroui/react';
import {
  IconBrandDiscord,
  IconCheck,
  IconCopy,
  IconExternalLink,
  IconMailFilled,
  IconBrandWhatsapp,
  IconBrandTelegram
} from '@tabler/icons-react';
import { primaryInput } from 'detect-it';

import PageTitle from '@/components/PageTitle';
import PageInfo from '@/components/PageInfo';
import MyTooltip from '@/components/MyTooltip';
import EasterEgg from '@/components/contact/EasterEgg';
import ButtonableLink from '@/components/ButtonableLink';
import ButtonScaleEffect from '@/components/contact/ButtonScaleEffect';

const iconSize = 30;

export default function Contact () {
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(primaryInput === 'touch');
  }, []);

  return (
    <>
      <PageInfo description="How to contact me" title="Contact - Daniel Rosado" />
      <PageTitle>Contact</PageTitle>
      {!isTouch && <ButtonScaleEffect />}

      <p className="text-lg mb-4 max-w-96">
        Here, you can find links to my social media and ways to contact me.
      </p>
      <div className="flex flex-col w-fit">
        <MyTooltip color="pink" content="Copy email" placement="top">
          <Snippet disableTooltip as={Button} checkIcon={<IconCheck />}
                   className="mb-4 hover:scale-105 transition-transform"
                   classNames={{
                     pre: 'flex flex-row items-center gap-2 text-sm min-[330px]:text-medium font-[inherit]',
                     copyButton: 'transition-shadow pointer-events-none'
                   }} color="pink" copyButtonProps={{
                     tabIndex: -1,
                     id: 'copy-email-button-inside',
                     as: 'div'
                   }}
                   copyIcon={<IconCopy />} id="copy-email-button" symbol={<IconMailFilled size={iconSize} />}
                   timeout={800}
                   variant="shadow"
                   onPress={() => {
                     window.document.getElementById('copy-email-button-inside').click();
                     window.document.getElementById('copy-email-button').focus({ preventScroll: true });
                   }}>
            daniel.rosado0205@gmail.com
          </Snippet>
        </MyTooltip>
        <MyTooltip color="secondary" content="Contact on discord" placement="bottom">
          <Button as={ButtonableLink} className="mb-4 hover:scale-105 transition-transform text-medium px-3 h-fit"
                  color="secondary" endContent={<IconExternalLink />} href="https://discord.com/"
                  startContent={<IconBrandDiscord size={iconSize} />}
                  target="_blank" variant="shadow">
            <span className="py-[0.62rem] grow text-center">dan_rosado0205</span>
          </Button>
        </MyTooltip>
        <MyTooltip color="success" content="Contact on WhatsApp" placement="bottom">
          <Button as={ButtonableLink} className="mb-4 hover:scale-105 transition-transform text-medium px-3 h-fit"
                  color="success" endContent={<IconExternalLink />} href="https://wa.me/14808865946"
                  startContent={<IconBrandWhatsapp size={iconSize} />}
                  target="_blank" variant="shadow">
            <span className="py-[0.62rem] grow text-center">+1(480)886-5946</span>
          </Button>
        </MyTooltip>
        <MyTooltip color="primary" content="Contact on Telegram" placement="bottom">
          <Button as={ButtonableLink} className="mb-4 hover:scale-105 transition-transform text-medium px-3 h-fit"
                  color="primary" endContent={<IconExternalLink />} href="https://t.me/dan_rosado0205"
                  startContent={<IconBrandTelegram size={iconSize} />}
                  target="_blank" variant="shadow">
            <span className="py-[0.62rem] grow text-center">@dan_rosado0205</span>
          </Button>
        </MyTooltip>
      </div>
      <EasterEgg className="mt-1"/>
    </>
  );
}
