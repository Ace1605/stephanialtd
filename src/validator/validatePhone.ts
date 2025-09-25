import { ChangeEvent } from 'react';
import {
  name,
  number,
  phoneNumberRegex,
  phoneNumberRegex11,
} from '@/regex';
import { Field } from '@/types/Common';

export function phoneNumberTest(
  val?: string,
  optional?: boolean,
  mustBe11Digits?: boolean
) {
  if (optional && !val) return true;
  if (!val) return false;
  if (val?.charAt(0) === '0' || mustBe11Digits) {
    if (val.length !== 11) return false;
    return phoneNumberRegex11.test(val);
  } else {
    if (val?.length !== 10) return false;
    return phoneNumberRegex.test(val);
  }
}

export const validateField = ({
  e,
  setFieldValue,
  fieldType,
  fieldName,
  limit,
  shouldValidate = true,
}: {
  e: ChangeEvent<HTMLInputElement>;
  setFieldValue: Field['setFieldValue'];
  fieldType: Field['fieldType'];
  fieldName: string;
  limit?: number;
  shouldValidate?: boolean;
}) => {
  if (setFieldValue && shouldValidate) {
    const val = e.target.value;

    switch (fieldType) {
      case 'phoneNumber':
        validatePhoneNumber(val, setFieldValue, fieldName, limit);
        break;
      case '11DigitPhone':
        validate11DigitPhone(val, setFieldValue, fieldName, limit);
        break;
      case 'name':
        validateName(val, setFieldValue, fieldName);
        break;
      case 'text':
        setFieldValue(fieldName, val);
        break;
      default:
        break;
    }
  }
};

const validatePhoneNumber = (
  val: string,
  setFieldValue: Field['setFieldValue'],
  fieldName: string,
  limit?: number
) => {
  const trimmedValue = val.trim().split(' ').join('');
  const _val =
    trimmedValue.startsWith('+234')
      ? trimmedValue.replace('+234', '')
      : trimmedValue.startsWith('234')
      ? trimmedValue.replace('234', '')
      : trimmedValue;

  if (number.test(_val) || val === '') {
    if (!limit || (_val && _val.length <= limit)) {
      if(setFieldValue) setFieldValue(fieldName, _val);
    }
  }
};

const validate11DigitPhone = (
  val: string,
  setFieldValue: Field['setFieldValue'],
  fieldName: string,
  limit?: number
) => {
  const trimmedValue = val.trim().split(' ').join('');
  const _val = trimmedValue.includes('+234')
    ? trimmedValue.replace('+234', '0')
    : trimmedValue.startsWith('234')
    ? trimmedValue.replace('234', '0')
    : trimmedValue;

  if (number.test(_val) || val === '') {
    if (!limit || (_val && _val.length <= limit)) {
      if(setFieldValue) setFieldValue(fieldName, _val);
    }
  }
};

const validateName = (
  val: string,
  setFieldValue: Field['setFieldValue'],
  fieldName: string
) => {
  if (val?.charAt(0) !== '-') {
    if (name.test(val) || val === '') {
      if(setFieldValue) setFieldValue(fieldName, val.replace('--', '-'));
    }
  }
};