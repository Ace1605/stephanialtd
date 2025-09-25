import { CallToAction } from '@/components/core/Footer/CallToAction';
import { DownloadPrompt } from '@/components/sections/home/DownloadPrompt';
import { FreedomToChoose } from '@/components/sections/why-choose-vpay/FreedomToChoose';
import { Hero } from '@/components/sections/why-choose-vpay/Hero';
import { StoryLine } from '@/components/sections/why-choose-vpay/StoryLine';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why choose VPay',
};

export default function WhyVPay() {
  return (
    <main>
      <Hero />
      <StoryLine />
      <FreedomToChoose />
      <DownloadPrompt />
      <CallToAction />
    </main>
  );
}
