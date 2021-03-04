import { RefObject } from 'react';

import { FormikProps } from 'formik';
import { action } from 'typesafe-actions';

import { SignUpFormValues } from '../../../pages/Auth';
import { Profile, UserTypes } from './types';

export const setProfile = (profile: Profile) =>
  action(UserTypes.SET_PROFILE, { profile });

export const registerRequest = (
  name: string,
  email: string,
  password: string,
  formikRef: RefObject<FormikProps<SignUpFormValues>>
) =>
  action(UserTypes.REGISTER_REQUEST, {
    name,
    email,
    password,
    formikRef,
  });
export const registerSuccess = () => action(UserTypes.REGISTER_SUCCESS);
export const registerFailure = () => action(UserTypes.REGISTER_FAILURE);
