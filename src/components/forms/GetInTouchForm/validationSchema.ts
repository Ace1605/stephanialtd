import { object, string } from 'yup';

export const validationSchema = object({
  email: string()
    .trim()
    .required('Please provide your email')
    .email('Please provide a valid email'),
  first_name: string().trim().required('Please provide your first name'),
  company_name: string().trim().required('Please provide company name'),
  last_name: string().trim().required('Please provide your last name'),
  message: string()
    .trim()
    .required('Please provide your message')
    .min(20, 'Please provide more information'),
});
