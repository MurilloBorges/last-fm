import { RefObject } from 'react';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import axios from 'axios';
import { FormikProps } from 'formik';

import { SignInFormValues } from '../../../pages/Auth';
import api from '../../../services/api';
import * as Helper from '../../../utils/helper';
import * as AuthActions from './actions';
import { AuthTypes } from './types';

interface SignInResponse {
  data: { id: string; token: string };
}

interface SignIn {
  payload: {
    email: string;
    password: string;
    formikSignInRef: RefObject<FormikProps<SignInFormValues>>;
  };
  type: string;
}

function* authSignIn({
  payload: { email, formikSignInRef, password },
}: SignIn) {
  try {
    const { data }: SignInResponse = yield call(
      axios.post,
      `${process.env.REACT_APP_MOCK_API}/session`,
      {
        email,
        password,
      }
    );

    api.defaults.headers.Authorization = `Bearer ${data.id}`;

    yield put(AuthActions.signInSuccess());
  } catch (err) {
    yield put(AuthActions.signInFailure());

    Helper.error(err, 'Falha ao autenticar usuário');
    if (formikSignInRef.current) {
      formikSignInRef.current.setFieldValue('password', '');
      formikSignInRef.current.setFieldTouched('password', false);
    }
  }
}

function* authSignOut() {
  try {
    yield put(AuthActions.signOutSuccess());
  } catch (err) {
    yield put(AuthActions.signOutFailure());
  }
}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, authSignIn),
  takeLatest(AuthTypes.SIGN_OUT_REQUEST, authSignOut),
]);
