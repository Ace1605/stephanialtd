'use client';

import { Accordion } from '@/components/commons/Accordion';
import { Minus, Plus } from '@/components/svgs/faqs/Signs';
import { useState } from 'react';

interface FAQ {
  uid: string;
  first_publication_date: string;
  data: {
    question: string;
    answer: string;
  };
}

export const FaqList = ({ faqs }: { faqs: FAQ[] }) => {
  const [expandedQuestion, setExpandedQuestion] = useState('');

  return (
    <>
      {faqs
        .sort((a, b) => {
          if (a.first_publication_date > b.first_publication_date) return 1;
          if (a.first_publication_date < b.first_publication_date) return -1;
          return 0;
        })
        .map(({ uid, data: { question, answer } }) => {
          const isActive = expandedQuestion === uid;

          return (
            <div key={uid} className={'border-b border-neutral-200'}>
              <button
                type={'button'}
                onClick={() => setExpandedQuestion(isActive ? '' : uid)}
                className='x-between gap-3 w-full py-6'
              >
                <div
                  className={
                    'font-semibold text-left text-sm 640:text-base text-neutral-main'
                  }
                >
                  {question}
                </div>
                <span>{isActive ? <Minus /> : <Plus />}</span>
              </button>

              <Accordion show={isActive}>
                <div className='min-h-[50px] 640:text-base text-sm font-normal pb-5 text-neutral-main'>
                  {answer}
                </div>
              </Accordion>
            </div>
          );
        })}
    </>
  );
};
