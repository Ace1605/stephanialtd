import { Metadata } from 'next';
import phone from '/public/assets/products/tap-pay-hero.png';
import { ProductsHero } from '@/components/sections/product/ProductsHero';
import { ProductBrand } from '@/components/sections/product/ProductsBrand';
import { createClient } from '@/prismicio';
import { FaqsAsFooter } from '@/components/modules/faqs/FaqsAsFooter';
import { ProductFeature } from '@/components/sections/product/ProductFeature';
import { HowToGetStarted } from '@/components/sections/product/HowToGetStarted';
import pos from '/public/assets/products/tap-and-pay.png';
import { SectionSlice } from '@/components/commons/sections/SectionSlice';
import payment from '/public/assets/products/payment-received.png';
import { CallToAction } from '@/components/core/Footer/CallToAction';

export const metadata: Metadata = {
  title: 'Tap and Pay',
};

export default async function TapAndPay() {
  const client = createClient();
  const faqs = await client.getAllByType('faq');
  return (
    <>
      <ProductsHero
        id='tap_and_pay_hero'
        image={phone}
        title={'Transforming Micro-Transactions with '}
        lastWord='Tap-and-Pay'
        description={
          'With VPay Tap and Pay, merchants can now accept cashless payments with their NFC*-enabled mobile devices, with no additional hardware required.'
        }
        buttonText='Get Started'
      />
      <ProductBrand />
      <ProductFeature
        featureTitle='Easy and convenient '
        lastWord='contactless '
        continuation='payment solution'
        hClassName='768:!w-2/3'
        pClassName='768:!w-2/3 768:pr-6'
        subtitle='VPay Tap and Pay is ideal for a wide range of merchants, including restaurants, boutiques, hair salons, delivery services, and cab drivers, who need to accept card payments.'
        image={pos}
        firstBoxTitle="Evolve and speed up your customers' payment "
        firstBoxText='Now, say goodbye to long queues at your checkout counter, as you have the capability to accept payments anywhere, on the move!'
        secondBoxTitle='No additional hardware required'
        secondBoxText="VPay's Tap and Pay feature requires just your NFC-compatible device. To view a list of supported device models,"
        linkText=' click here.'
        link='https://www.vpay.africa/login'
        ThirdBoxTitle='See all your transactions in real-time'
        thirdBoxText='VPay Tap and Pay seamlessly consolidates payments from different devices, synchronizing them into a single, comprehensive dashboard for easy monitoring.'
      />
      <SectionSlice
        imagePosition={'right'}
        title={
          <span className={'1180:text-[49px] block'}>
            Turn
            <span className='text-gradient'> your phone </span>
            into a POS terminal
          </span>
        }
        hClassName='768:!w-5/6'
        description={
          <span className={'block'}>
            {`With VPay Tap and Pay, you can receive payments via cards with your mobile device. Keep a close eye on your transactions with real-time updates, we ensure you're always in the loop and never miss a detail.`}
          </span>
        }
        image={payment}
        action='Get Started'
        actionLink='https://www.vpay.africa/signup'
        target='_blank'
        withArrow
      />
      <FaqsAsFooter faqs={faqs} />
      <CallToAction />
    </>
  );
}
