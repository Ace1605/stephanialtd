import { object, string } from 'yup';

export const validationSchema = object({
  email: string()
    .trim()
    .required('Please provide your email')
    .email('Please provide a valid email'),
});
