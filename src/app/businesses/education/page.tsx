import { Metadata } from 'next';
import { FaqsAsFooter } from '@/components/modules/faqs/FaqsAsFooter';
import { DownloadPrompt } from '@/components/sections/home/DownloadPrompt';
import { IndustriesHero } from '@/components/sections/industries/IndustriesHero';
import { VPayNumbers } from '@/components/modules/VPayNumbers';
import { CallToAction } from '@/components/core/Footer/CallToAction';
import { VideoSection } from '@/components/sections/industries/VideoSection';
import office from '/public/assets/businesses/office-man.png';
import library from '/public/assets/businesses/library.png';
import student from '/public/assets/businesses/student.png';
import { ServiceSolution } from '@/components/sections/industries/ServiceSolution';
import { Description } from '@/components/sections/industries/hook/useDescription';
import { educationGoals } from '@/components/sections/industries/contants';

export const metadata: Metadata = {
  title: 'Education',
};

export default function Fashion() {
  return (
    <>
      <IndustriesHero
        subtitle='Specialised innovative payment solutions designed specifically for the education industry.'
        description='From streamlined school fee collections to smart student accounts, our services, including Tap and Pay (NFC), QR-enabled cards with spend controls, and comprehensive reconciliation portals, are crafted to meet the unique needs of educational institutions and their communities.'
        title='Education'
        id='education_hero'
        firstImage={library}
        secondImage={student}
      />
      <VideoSection
        image={office}
        title='Delivering Proven Results For '
        lastWord='Schools'
        id='education_video_section'
      />
      <ServiceSolution
        title=' out your service all around.'
        lastWord='Smooth'
        description={<Description goals={educationGoals} />}
      />

      <DownloadPrompt />
      <FaqsAsFooter faqs={[]} />
      <VPayNumbers withoutParent />
      <CallToAction />
    </>
  );
}
