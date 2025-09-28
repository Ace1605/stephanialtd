import { Input } from '@/components/form-elements/Input';
import { SubmitButton } from '@/components/form-elements/SubmitButton';
import { TextArea } from '@/components/form-elements/Textarea';
import { Form as FormikForm, FormikProps } from 'formik';
import { initialValues } from './initialValues';

interface Props {
  formikProps: FormikProps<typeof initialValues>;
  processing: boolean;
}

export const Form = ({ processing, formikProps }: Props) => {
  const { handleSubmit } = formikProps;

  return (
    <FormikForm
      onSubmit={handleSubmit}
      className={'p-5 768:p-14 rounded-2xl border border-neutral-100'}
    >
      <Input
        label='Full Name'
        placeholder={'Enter your full name'}
        autoFocus
        name='full_name'
        next='full_name'
      />

      <div className='640:flex gap-4'>
        <Input
          label='Email Address'
          placeholder={'Enter your email address'}
          name='email'
        />

        <Input
          label='Company Name'
          placeholder={'Enter your company name'}
          name='company_name'
          next='company_name'
        />
      </div>

      <TextArea
        label='Message'
        placeholder={'Enter your message'}
        name='message'
      />

      <div className='flex'>
        <SubmitButton submitting={processing} className='mt-8 primary-button'>
          Send Message
        </SubmitButton>
      </div>
    </FormikForm>
  );
};
