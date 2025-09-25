'use client';

import { motion } from 'framer-motion';
import { AppCtaButton } from '@/components/buttons/AppCtaButton';

export const BuildAwesomeProducts = () => {
  return (
    <section
      id={'developer_feature'}
      className={'bg-neutral-150 overflow-hidden pt-20 768:pt-32 pb-6 768:pb-8'}
    >
      <div className='app-container'>
        <h3 className='text-left text-black text-[35px] 640:text-[48px] 1180:text-[60px] leading-[41px] 640:leading-[66px] 1180:leading-[72px] tracking-[-1.05px] 640:tracking-[-1.8px] font-semibold mb-4 768:w-2/3'>
          Build Awesome
          <span>
            <span className={'text-gradient'}> Products</span>
          </span>
        </h3>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className={
            'mb-7 768:mb-14 text-neutral-1000 text-base 768:leading-[px] 768:text-[20px] font-normal text-left pr-2'
          }
        >
          What can you build with VPay? Here&apos;s how our APIs come together
          to bring ideas to life.
        </motion.p>
        <div className='grid 768:grid-cols-2 1180:grid-cols-3 gap-6 768:gap-12 mt-8 768:mt-16 mb-16 768:mb-36'>
          <div className='bg-white 768:min-h-[360px] relative rounded-[20px] border border-neutral-100 p-7 768:p-9'>
            <p className='text-black text-[20px] 768:text-[24px] leading-[30px] 768:leading-[32px] font-semibold 768:pr-14 '>
              Outward Transfer/
              <span className='inline 768:block'>Disbursement</span>
            </p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className={
                'mt-2.5 768:mt-3 text-neutral-600 text-base 768:leading-[28px] font-light text-left w-full 1180:max-w-[270px]'
              }
            >
              This API enables the initiation of fund transfers from a
              user&apos;s account to external bank accounts.
            </motion.p>
            <div
              className={
                'flex relative mt-4 768:mt-0 768:absolute 768:bottom-10'
              }
            >
              <AppCtaButton
                href='https://docs.vpay.africa/vpay-api-specification-basic-gude/methods/outbound-transfer'
                className={
                  'text-link mt-6 text-primary-main flex gap-3 hover:text-primary-dark gap-2 group'
                }
                withArrow
                target='_blank'
              >
                <span className=''>View Docs</span>
              </AppCtaButton>
            </div>
          </div>
          <div className='bg-white 768:min-h-[360px] relative rounded-[20px] border border-neutral-100 p-7 768:p-9'>
            <p className='text-black text-[20px] 768:text-[24px] leading-[30px] 768:leading-[32px] font-semibold 768:pr-14 '>
              Get List of Banks
            </p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className={
                'mt-2.5 768:mt-3 text-neutral-600 text-base 768:leading-[28px] font-light text-left w-full 1180:max-w-[270px]'
              }
            >
              This API function retrieves a comprehensive list of banks
              available in a specific region. It&apos;s typically used for
              presenting users with banking options for transactions.
            </motion.p>
            <div
              className={
                'flex relative mt-4 768:mt-0 768:absolute 768:bottom-10'
              }
            >
              <AppCtaButton
                href='https://docs.vpay.africa/vpay-api-specification-basic-gude/methods/get-bank-list'
                className={
                  'text-link mt-6 text-primary-main flex gap-3 hover:text-primary-dark gap-2 group'
                }
                withArrow
                target='_blank'
              >
                <span className=''>View Docs</span>
              </AppCtaButton>
            </div>
          </div>
          <div className='bg-white 768:min-h-[360px] relative rounded-[20px] border border-neutral-100 p-7 768:p-9'>
            <p className='text-black text-[20px] 768:text-[24px] leading-[30px] 768:leading-[32px] font-semibold 768:pr-14 '>
              Name Enquiry
            </p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className={
                'mt-2.5 768:mt-3 text-neutral-600 text-base 768:leading-[28px] font-light text-left w-full 1180:max-w-[270px]'
              }
            >
              This API allows for the verification of account holder
              information. When provided with a bank account number, it returns
              the name of the account holder.
            </motion.p>
            <div
              className={
                'flex relative mt-4 768:mt-0 768:absolute 768:bottom-10'
              }
            >
              <AppCtaButton
                href='https://docs.vpay.africa/vpay-api-specification-basic-gude/methods/nuban-lookup'
                className={
                  'text-link mt-6 text-primary-main flex gap-3 hover:text-primary-dark gap-2 group'
                }
                withArrow
                target='_blank'
              >
                <span className=''>View Docs</span>
              </AppCtaButton>
            </div>
          </div>
          <div className='bg-white 768:min-h-[360px] relative rounded-[20px] border border-neutral-100 p-7 768:p-9'>
            <p className='text-black text-[20px] 768:text-[24px] leading-[30px] 768:leading-[32px] font-semibold 768:pr-14 '>
              Payment Checkout
            </p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className={
                'mt-2.5 768:mt-3 text-neutral-600 text-base 768:leading-[28px] font-light text-left w-full 1180:max-w-[270px]'
              }
            >
              This API handles the processing of payments, typically integrating
              various payment methods and gateways. It streamlines the checkout
              process for e-commerce and online services.
            </motion.p>
            <div
              className={
                'flex relative mt-4 768:mt-0 768:absolute 768:bottom-10'
              }
            >
              <AppCtaButton
                href='https://docs.vpay.africa/vpay-js-inline-dropin-integration-guide'
                className={
                  'text-link mt-6 text-primary-main flex gap-3 hover:text-primary-dark gap-2 group'
                }
                withArrow
                target='_blank'
              >
                <span className=''>View Docs</span>
              </AppCtaButton>
            </div>
          </div>
          <div className='bg-white 768:min-h-[360px] relative rounded-[20px] border border-neutral-100 p-7 768:p-9'>
            <p className='text-black text-[20px] 768:text-[24px] leading-[30px] 768:leading-[32px] font-semibold 768:pr-14 '>
              Get Wallet Balance
            </p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className={
                'mt-2.5 768:mt-3 text-neutral-600 text-base 768:leading-[28px] font-light text-left w-full 1180:max-w-[270px]'
              }
            >
              This API provides real-time information about the balance of a
              digital wallet. It&apos;s essential for users to monitor their
              funds and for applications to validate transactions.
            </motion.p>
            <div
              className={
                'flex relative mt-4 768:mt-0 768:absolute 768:bottom-10'
              }
            >
              <AppCtaButton
                href='https://docs.vpay.africa/vpay-api-specification-basic-gude/methods/get-wallet-balance'
                className={
                  'text-link mt-6 text-primary-main flex gap-3 hover:text-primary-dark gap-2 group'
                }
                withArrow
                target='_blank'
              >
                <span className=''>View Docs</span>
              </AppCtaButton>
            </div>
          </div>
          <div className='bg-white 768:min-h-[360px] relative rounded-[20px] border border-neutral-100 p-7 768:p-9'>
            <p className='text-black text-[20px] 768:text-[24px] leading-[30px] 768:leading-[32px] font-semibold 768:pr-4 '>
              Generate Virtual Account
            </p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className={
                'mt-2.5 768:mt-3 text-neutral-600 text-base 768:leading-[28px] font-light text-left w-full 1180:max-w-[270px]'
              }
            >
              This function creates a temporary or virtual bank account. These
              accounts are often used for specific transactions .
            </motion.p>
            <div
              className={
                'flex relative mt-4 768:mt-0 768:absolute 768:bottom-10'
              }
            >
              <AppCtaButton
                href='https://docs.vpay.africa/vpay-api-specification-basic-gude/methods/create-virtual-account-customer'
                className={
                  'text-link mt-6 text-primary-main flex gap-3 hover:text-primary-dark gap-2 group'
                }
                withArrow
                target='_blank'
              >
                <span className=''>View Docs</span>
              </AppCtaButton>
            </div>
          </div>
          <div className='bg-white 768:min-h-[360px] relative rounded-[20px] border border-neutral-100 p-7 768:p-9'>
            <p className='text-black text-[20px] 768:text-[24px] leading-[30px] 768:leading-[32px] font-semibold 768:pr-14 '>
              Get Outward Transfer by Ref
            </p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className={
                'mt-2.5 768:mt-3 text-neutral-600 text-base 768:leading-[28px] font-light text-left w-full 1180:max-w-[270px]'
              }
            >
              This API retrieves details of an outward transfer using a unique
              reference ID. It&apos;s useful for tracking and confirming the
              status of specific transactions.
            </motion.p>
            <div
              className={
                'flex relative mt-4 768:mt-0 768:absolute 768:bottom-10'
              }
            >
              <AppCtaButton
                href='https://docs.vpay.africa/vpay-api-specification-basic-gude/methods/get-transaction-by-reference-number'
                className={
                  'text-link mt-6 text-primary-main flex gap-3 hover:text-primary-dark gap-2 group'
                }
                withArrow
                target='_blank'
              >
                <span className=''>View Docs</span>
              </AppCtaButton>
            </div>
          </div>
          <div className='bg-white 768:min-h-[360px] relative rounded-[20px] border border-neutral-100 p-7 768:p-9'>
            <p className='text-black text-[20px] 768:text-[24px] leading-[30px] 768:leading-[32px] font-semibold 768:pr-14 '>
              Requery Outward Transfer
            </p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className={
                'mt-2.5 768:mt-3 text-neutral-600 text-base 768:leading-[28px] font-light text-left w-full 1180:max-w-[270px]'
              }
            >
              Used to recheck the status of an outward transfer. This function
              is particularly useful in cases where the initial transfer status
              is unclear or pending.
            </motion.p>
            <div
              className={
                'flex relative mt-4 768:mt-0 768:absolute 768:bottom-10'
              }
            >
              <AppCtaButton
                href='https://docs.vpay.africa/vpay-api-specification-basic-gude/methods/re-query-transaction-by-reference-number'
                className={
                  'text-link mt-6 text-primary-main flex gap-3 hover:text-primary-dark gap-2 group'
                }
                withArrow
                target='_blank'
              >
                <span className=''>View Docs</span>
              </AppCtaButton>
            </div>
          </div>
          <div className='bg-white 768:min-h-[360px] relative rounded-[20px] border border-neutral-100 p-7 768:p-9'>
            <p className='text-black text-[20px] 768:text-[24px] leading-[30px] 768:leading-[32px] font-semibold 768:pr-14 '>
              Custom API Request
            </p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className={
                'mt-2.5 768:mt-3 text-neutral-600 text-base 768:leading-[28px] font-light text-left w-full 1180:max-w-[270px]'
              }
            >
              This offers tailored API solutions based on specific requirements.
              It&apos;s ideal for unique business needs that standard APIs do
              not address, allowing for greater flexibility
            </motion.p>
            <div
              className={
                'flex relative mt-4 768:mt-0 768:absolute 768:bottom-10'
              }
            >
              <AppCtaButton
                href='/products/developer-apis-contact'
                className={
                  'text-link mt-6 text-primary-main flex gap-3 hover:text-primary-dark gap-2 group'
                }
                withArrow
              >
                <span className=''>View Docs</span>
              </AppCtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
