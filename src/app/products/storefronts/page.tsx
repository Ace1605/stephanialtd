import { Metadata } from 'next';
import phone from '/public/assets/products/storefront-hero.png';
import { ProductsHero } from '@/components/sections/product/ProductsHero';
import { ProductBrand } from '@/components/sections/product/ProductsBrand';
import { FaqsAsFooter } from '@/components/modules/faqs/FaqsAsFooter';
import { ProductFeature } from '@/components/sections/product/ProductFeature';
import { HowToGetStarted } from '@/components/sections/product/HowToGetStarted';
import { SectionSlice } from '@/components/commons/sections/SectionSlice';
import lady from '/public/assets/products/storefront-wide.png';
import checkout from '/public/assets/products/checkout.png';
import { CallToAction } from '@/components/core/Footer/CallToAction';

export const metadata: Metadata = {
  title: 'Storefront',
};

export default function Cashier() {
  return (
    <>
      <ProductsHero
        id='storefront_hero'
        image={phone}
        title={'Start Selling Online '}
        lastWord='No Coding '
        continuation='Required'
        description={
          'Create a free online store that helps you find customers, accept payments from anyone, and grow your business.'
        }
        buttonText='Get Started'
      />
      <ProductBrand />
      <ProductFeature
        featureTitle='Why Platforms And '
        lastWord='Marketplaces '
        continuation='Choose VPay'
        hClassName='768:!w-2/3'
        subtitle='Whether you sell physical products like furniture, Or digital products like ebooks and art VPay storefront covers all your online sells needs. '
        image={lady}
        firstBoxTitle='Sell Multiple Products And Variants'
        firstBoxText='Track each Storefront transaction in real time via the VPay Dashboard, rather than as a single bulk sum, saving numerous hours in reconciliation.'
        secondBoxTitle='Manage Your Online Store On Mobile'
        secondBoxText='Unlike typical POS systems that only process card payments, VPay Storefront offers a variety of payment options for customers.'
        ThirdBoxTitle='Multiple Payment Options, With An Easy Checkout'
        thirdBoxText='Our Storefront come equipped with both Wi-Fi and a global SIM card, with a robust data signal for continuous network access.'
      />
      <SectionSlice
        imagePosition={'right'}
        title={
          <span className={'1180:text-[54px] block'}>
            Let your customers pay how they want at
            <span>
              <span className={'text-gradient'}> checkout</span>
            </span>
          </span>
        }
        hClassName='768:!w-full'
        description={
          <span className={'block'}>
            {`VPay storefront comes with VPay payments options, card processing, bank transfers and USSD. We automatically handle updates on our end so upgrading is hassle-free. All you need is a VPay Business account.`}
          </span>
        }
        image={checkout}
      />
      <HowToGetStarted
        title='How To Start '
        lastWord='Selling Online'
        subtitle='Need support?'
        action='Talk to our team'
        firstBoxTitle='Create A Free Account'
        firstBoxText='Provide the required information and a business account will be created for you instantly. Once done, login to your account and click on the Products menu.'
        secondBoxTitle='Setup Your Product'
        secondBoxText="Begin by setting up your store's inventory, complete with high-quality images of your products, prices and detailed descriptions of their specifications."
        ThirdBoxTitle='Start Selling'
        thirdBoxText="Distribute your store's link, initiate the sales process, and commence accepting various payment methods."
      />
      <FaqsAsFooter faqs={[]} />
      <CallToAction />
    </>
  );
}
