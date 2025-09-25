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

export const DeveloperApisGetInTouchForm = ({ onSuccess }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  async function sendMail(
    email: string,
    phone_number: string,
    business_name: string,
    nature_of_business: string,
    integration_requirement: string,
    reset: () => void,
  ) {
    try {
      setIsLoading(true);

      const _res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/service/demo/v1/query/messaging/api/support/send`,
        {
          method: 'POST',
          headers: {
            publickey: `${process.env.NEXT_PUBLIC_KEY}`,
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            subject: email,
            phone_number,
            business_name,
            nature_of_business,
            integration_requirement,
            message: integration_requirement,
            recipients:
              'api-devs@vpay.africa, compliance@vpay.africa, customersupport@vpay.africa, adebayo.oladunjoye@vpay.africa, theresa.usen@vpay.africa',
          }),
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
      onSubmit={(
        {
          phone_number,
          business_name,
          nature_of_business,
          integration_requirement,
          email,
        },
        { resetForm },
      ) => {
        sendMail(
          phone_number,
          business_name,
          nature_of_business,
          integration_requirement,
          email,
          resetForm,
        );
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
