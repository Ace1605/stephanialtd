import { CallToAction } from '@/components/core/Footer/CallToAction';
import { LegalDocuments } from '@/components/sections/legal/LegalDocuments';
import { createClient } from '@/prismicio';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal',
};

export default async function Legal(props: any) {
  const client = createClient();
  const termsOfUse = await client.getSingle('terms_of_use');
  const privacyPolicy = await client.getSingle('privacy_policy');

  return (
    <main>
      <div>
        <div>
          <LegalDocuments
            params={props.params}
            termsOfUse={termsOfUse}
            privacyPolicy={privacyPolicy}
          />
        </div>
      </div>

      <CallToAction />
    </main>
  );
}
