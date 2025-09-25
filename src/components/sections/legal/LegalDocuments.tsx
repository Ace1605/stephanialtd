'use client';

import { useRouter } from 'next/navigation';
import { TermsOfUseDocument, PrivacyPolicyDocument } from '@/types/prismic';
import { PrismicRichText } from '@prismicio/react';

interface Props {
  params: any;
  termsOfUse: TermsOfUseDocument<string>;
  privacyPolicy: PrivacyPolicyDocument<string>;
}

export const LegalDocuments = ({
  termsOfUse,
  privacyPolicy,
  params,
}: Props) => {
  return (
    <section id={'privacy_policy'} className={''}>
      {params?.id === 'terms-of-use' ? (
        <div className=''>
          <div className='bg-neutral-150 py-14 640:py-20 mb-16 768:mb-32'>
            <h5
              className={
                'text-[48px] main-gradient 768:text-[70px] text-center py-3'
              }
            >
              Terms and Conditions
            </h5>
          </div>

          <div className='app-container mx-auto px-8 768:px-28 mb-20'>
            {termsOfUse?.data?.content && (
              <div className='rich-text'>
                <PrismicRichText field={termsOfUse.data.content} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className=''>
          <div className='bg-neutral-150 py-14 640:py-20  mb-16 768:mb-32'>
            <h5
              className={
                'text-[48px] main-gradient 768:text-[70px] text-center py-3 leading-[75px]'
              }
            >
              Privacy Policy
            </h5>
          </div>

          <div className='app-container mx-auto px-8 768:px-28 mb-20'>
            {privacyPolicy?.data?.content && (
              <div className='rich-text'>
                <PrismicRichText field={privacyPolicy.data.content} />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
