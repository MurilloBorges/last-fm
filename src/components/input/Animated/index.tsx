import React, { RefObject, useCallback, useEffect, useRef } from 'react';

import { FormikProps } from 'formik';

import { SignInFormValues, SignUpFormValues } from '../../../pages/Auth';
import {
  AuthField,
  AuthInput,
  CustomInput,
  CustomLabel,
  IconContent,
} from './styles';

interface Props {
  disabled?: boolean;
  error?: string;
  field: string;
  formikRef: RefObject<
    FormikProps<SignInFormValues> | FormikProps<SignUpFormValues>
  >;
  icon: () => JSX.Element;
  label: string;
  mask?: string;
  maxLength?: number;
  onChange?: (field: string, text: string) => void;
  textTransform?: string;
  touched?: boolean;
  type?: string;
  value?: string;
  width?: string;
  margin?: string;
}

const Animated: React.FC<Props> = ({
  disabled,
  error = '',
  field,
  formikRef,
  icon,
  label,
  margin = '15px 0 5px',
  maxLength = 255,
  textTransform = '',
  touched = false,
  type = 'text',
  value,
  width = 'initial',
}) => {
  const labelRef: RefObject<HTMLLabelElement> = useRef(null);
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    if (value && labelRef.current) labelRef.current.classList.add('active');
  }, [labelRef, value]);

  const onClickOrigin = useCallback(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [inputRef]);

  const onFocusOrigin = useCallback(() => {
    if (labelRef.current) labelRef.current.classList.add('active');
  }, [labelRef]);

  const onBlurOrigin = useCallback(() => {
    if (!value && labelRef.current) labelRef.current.classList.remove('active');
  }, [labelRef, value]);

  const handleChange = useCallback(
    ({ target: { value: text } }: { target: { value: string } }) => {
      formikRef.current?.setFieldValue(`${field}`, text);
    },
    [formikRef, field]
  );

  return (
    <AuthField
      className={error && touched ? 'error' : undefined}
      margin={margin}
      width={width}
    >
      <AuthInput>
        <IconContent className={error && touched ? 'error' : undefined}>
          {icon()}
        </IconContent>

        <CustomLabel onClick={onClickOrigin} ref={labelRef}>
          {label}
        </CustomLabel>

        <CustomInput
          disabled={disabled}
          maxLength={maxLength}
          onBlur={onBlurOrigin}
          onChange={handleChange}
          onFocus={onFocusOrigin}
          ref={inputRef}
          textTransform={textTransform}
          type={type}
          value={value}
        />
      </AuthInput>
    </AuthField>
  );
};

export default Animated;
