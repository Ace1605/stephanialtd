import { object, string } from 'yup';

export const validationSchema = object({
  email: string()
    .trim()
    .required('Please provide your email')
    .email('Please provide a valid email'),
  full_name: string().trim().required('Please provide your full name'),
  company_name: string().trim().required('Please provide company name'),
  message: string()
    .trim()
    .required('Please provide your message')
    .min(20, 'Please provide more information'),
});
