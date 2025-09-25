export interface IFile {
  file?: File;
  url?: string;
  id: string;
}

export interface Field {
  setFieldValue?: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => void;
  capitalizeLabel?: boolean;
  fieldType?:
    | 'phoneNumber'
    | 'name'
    | 'fullName'
    | 'text'
    | '11DigitPhone'
  limit?: number;
  shouldValidate?: boolean;
  // Next field to focus
  next?: string;
  label?: string;
  placeholder?: string;
}

export interface FileField {
  id?: string;
  maximumFileSizeInMB?: number;
  setFile: (value: IFile) => void;
  file: IFile | null;
  extensions?: string[];
}
