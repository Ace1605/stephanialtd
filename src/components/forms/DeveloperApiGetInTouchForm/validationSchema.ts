import { phoneNumberTest } from '@/validator/validatePhone';
import { object, string } from 'yup';

export const validationSchema = object({
  email: string()
    .trim()
    .required('Please provide your email')
    .email('Please provide a valid email'),
  phone_number: string()
    .required('Please provide phone number')
    .test('invalidNumber', 'Provide a valid phone number', (val) =>
      phoneNumberTest(val)
    ),
  business_name: string().trim().required('Please provide your business name'),
  nature_of_business: string().trim().required('Please provide your nature of business'),
  integration_requirement: string()
    .trim()
    .required('Please provide your integration requirements')
    .min(20, 'Please provide more information'),
});
