import { useField } from 'formik';
import { useEffect } from 'react';
import clsx from 'clsx';
import { Field } from '@/types/Common';
import { formatPhoneNumber } from '@/validator/formatPhoneNumber';
import { validateField } from '@/validator/validatePhone';

type Props = JSX.IntrinsicElements['input'] &
  Field & {
    icon?: boolean;
  };

export const PhoneNumberInput = ({
  label,
  className,
  setFieldValue,
  fieldType = 'phoneNumber',
  limit = 11,
  next,
  shouldValidate: _,
  icon,
  ...props
}: Props) => {
  const [field, meta] = useField(props.name as string);
  const id = props.id ?? props.name;

  useEffect(() => {
    if (next && field.value?.length === limit) {
      document.getElementById(next)?.focus();
    }
  }, [field.value]);

  return (
    <div className={clsx(className, 'mt-5 w-full')}>
      <div className='flex'>
        <label
          htmlFor={id}
          className='text-left text-[14px] text-black font-medium'
        >
          {label}
        </label>
      </div>

      <div className='relative w-full'>
        <input
          {...props}
          {...field}
          type='tel'
          id={props.id ?? field.name}
          value={formatPhoneNumber(field.value)}
          onChange={
            setFieldValue
              ? (e) => {
                  validateField({
                    e: e,
                    setFieldValue: setFieldValue,
                    fieldType: fieldType,
                    fieldName: field.name,
                    limit,
                    shouldValidate: true,
                  });
                }
              : field.onChange
          }
          className={clsx(
            'input relative w-full',
            meta.touched && meta.error ? 'border-error-main' : '',
          )}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className='generic-error'>{meta.error}</div>
      ) : null}
    </div>
  );
};
