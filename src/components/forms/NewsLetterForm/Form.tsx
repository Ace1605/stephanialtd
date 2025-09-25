import { SubmitButton } from '@/components/form-elements/SubmitButton';
import { Form as FormikForm, FormikProps } from 'formik';
import { initialValues } from './initialValues';
import Link from 'next/link';
import { CustomInput } from '@/components/form-elements/CustomInput';

interface Props {
  formikProps: FormikProps<typeof initialValues>;
  processing: boolean;
}

export const Form = ({ processing, formikProps }: Props) => {
  const { handleSubmit } = formikProps;

  return (
    <FormikForm onSubmit={handleSubmit} className={''}>
      <div className='grid 768:flex gap-3 items-start mt-5 '>
        <CustomInput
          className='bg-white mt-0 768:w-[375px]'
          placeholder={'Enter Email Address'}
          name='email'
        />
        <SubmitButton submitting={processing} className='primary-button'>
          Subscribe
        </SubmitButton>
      </div>
      <p className='text-sm font-medium mt-3'>
        You can unsubscribe at any time. Learn more about our
        <Link
          href={'/legal/privacy-policy'}
          className={'italic ml-1 inline text-primary-main'}
        >
          Privacy Policy
        </Link>
      </p>
    </FormikForm>
  );
};
