import { Field } from '@/types/Common';
import { useField } from 'formik';
import clsx from 'clsx';
import { useEffect } from 'react';

type Props = JSX.IntrinsicElements['input'] & Field;

export const CustomInput = ({
  className,
  limit,
  type = 'text',
  next,
  label,
  ...props
}: Props) => {
  const [field, meta] = useField(props.name as string);
  const id = props.id ?? props.name;

  useEffect(() => {
    if (next && field.value?.length === limit) {
      document.getElementById(next)?.focus();
    }
  }, [field.value, limit]);

  return (
    <div>
      <div>
        <label htmlFor={id} className='text-left text-black font-medium'>
          {label}
        </label>
      </div>

      <input
        {...props}
        {...field}
        {...{ id, type }}
        value={field.value ?? ''}
        className={clsx(
          className,
          meta.touched && meta.error ? 'border-error-main' : '',
          'input w-full 768:max-w-[474px]',
        )}
      />

      {meta.touched && meta.error ? (
        <div className='input-error'>{meta.error}</div>
      ) : null}
    </div>
  );
};
