import { Input } from '@/components/form-elements/Input';
import { SubmitButton } from '@/components/form-elements/SubmitButton';
import { TextArea } from '@/components/form-elements/Textarea';
import { Form as FormikForm, FormikProps } from 'formik';
import { initialValues } from './initialValues';
import { PhoneNumberInput } from '@/components/form-elements/PhoneNumberInput';

interface Props {
  formikProps: FormikProps<typeof initialValues>;
  processing: boolean;
}

export const Form = ({ processing, formikProps }: Props) => {
  const { handleSubmit, setFieldValue } = formikProps;

  return (
    <FormikForm
      onSubmit={handleSubmit}
      className={'p-5 768:p-14 rounded-2xl border border-neutral-100'}
    >
      <div className='640:flex gap-4 -mt-5'>
        <Input
          label='Email Address'
          placeholder={'Enter Email Address'}
          autoFocus
          name='email'
          next='email'
        />

        <PhoneNumberInput
          label='Phone Number'
          placeholder={'Enter Phone Number'}
          name='phone_number'
          setFieldValue={setFieldValue}
          next='phone_number'
        />
      </div>

      <div className='640:flex gap-4'>
        <Input
          label='Business Name'
          placeholder={'Enter Business Name'}
          name='business_name'
        />

        <Input
          label='Nature of business'
          placeholder={'Enter Nature of business'}
          name='nature_of_business'
          next='nature_of_business'
        />
      </div>

      <TextArea
        label='Integration Requirements'
        placeholder={'Enter requirements'}
        name='integration_requirement'
      />

      <div className='flex'>
        <SubmitButton submitting={processing} className='mt-8 primary-button'>
          Send Message
        </SubmitButton>
      </div>
    </FormikForm>
  );
};
