'use client';

import { Formik } from 'formik';
import { useState } from 'react';
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';
import { Form } from './Form';
import { toast } from 'react-toastify';

interface Props {
  onSuccess?: () => void;
}

export const NewsLetterForm = ({ onSuccess }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  async function sendMail(email: string, reset: () => void) {
    try {
      setIsLoading(true);

      const _res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/service/demo/v1/query/newsletter/subscribe`,
        {
          method: 'POST',
          headers: {
            publickey: `${process.env.NEXT_PUBLIC_KEY}`,
            'content-type': 'application/json',
          },
          body: JSON.stringify({ email }),
        },
      );

      const res = await _res.json();

      setIsLoading(false);

      if (res.status) return toast.success(res.message, { type: 'success' });

      toast(res.message, { type: 'info' });

      reset();

      if (!onSuccess) return;

      onSuccess();
    } catch (err) {
      setIsLoading(false);

      console.error(err);

      toast('Failed to join Newsletter', { type: 'error' });
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={({ email }, { resetForm }) => {
        sendMail(email, resetForm);
      }}
      validateOnBlur={false}
    >
      {(formikProps) => {
        return (
          <Form
            {...{
              formikProps,
              processing: isLoading,
            }}
          />
        );
      }}
    </Formik>
  );
};
