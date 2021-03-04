import { RefObject } from 'react';

import { FormikProps } from 'formik';
import { action } from 'typesafe-actions';

import { SignInFormValues } from '../../../pages/Auth';
import { AuthTypes } from './types';

export const setToken = (token: string, userId: string) =>
  action(AuthTypes.SET_TOKEN, { token, userId });

export const signInRequest = (
  email: string,
  password: string,
  formikSignInRef?: RefObject<FormikProps<SignInFormValues>>
) =>
  action(AuthTypes.SIGN_IN_REQUEST, {
    email,
    password,
    formikSignInRef,
  });
export const signInSuccess = () => action(AuthTypes.SIGN_IN_SUCCESS);
export const signInFailure = () => action(AuthTypes.SIGN_IN_FAILURE);

export const signOutRequest = () => action(AuthTypes.SIGN_OUT_REQUEST);
export const signOutSuccess = () => action(AuthTypes.SIGN_OUT_SUCCESS);
export const signOutFailure = () => action(AuthTypes.SIGN_OUT_FAILURE);
