import { CallToAction } from '@/components/core/Footer/CallToAction';
import { GetSupport } from '@/components/modules/pricing/GetSupport';
import { PricingHeroSection } from '@/components/modules/pricing/PricingHeroSection';
import { PricingModule } from '@/components/modules/pricing/PricingModule';
import { DownloadPrompt } from '@/components/sections/home/DownloadPrompt';
import { createClient } from '@/prismicio';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
};

export default async function Pricing() {
  const client = createClient();

  const pricing = await client.getAllByType('pricing_module', {
    graphQuery: `
    {
      pricing_module {
        title
        pricing
      }
    }
  `,
  });

  return (
    <main>
      <PricingHeroSection />
      <PricingModule pricing={pricing} />
      <GetSupport />
      <DownloadPrompt />
      <CallToAction />
    </main>
  );
}
