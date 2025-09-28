import { CallToAction } from '@/components/core/Footer/CallToAction';
import { GetInTouch } from '@/components/sections/contact-sales/GetInTouch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developer Apis Contact',
};

export default function ContactUs() {

  return (
    <main>
      <GetInTouch />
      <CallToAction />
    </main>
  );
}
