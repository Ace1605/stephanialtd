import { CallToAction } from '@/components/core/Footer/CallToAction';
import { GetInTouch } from '@/components/sections/contact-sales/GetInTouch';
import { createClient } from '@/prismicio';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developer Apis Contact',
};

export default async function ContactUs() {
  const client = createClient();
  const faqs = await client.getAllByType('faq');

  return (
    <main>
      <GetInTouch />
      <CallToAction />
    </main>
  );
}
