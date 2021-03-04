import { RefObject } from 'react';
import { all, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { FormikProps } from 'formik';

import pages from '../../../constants/pages';
import { SignUpFormValues } from '../../../pages/Auth';
import history from '../../../services/history';
import * as Helper from '../../../utils/helper';
import * as UserActions from './actions';
import { UserTypes } from './types';

interface Register {
  payload: {
    email: string;
    name: string;
    password: string;
    formikRef: RefObject<FormikProps<SignUpFormValues>>;
  };
  type: string;
}

function* userRegister({
  payload: { email, formikRef, name, password },
}: Register) {
  try {
    /**
     * Chamada para API passando os dados
     */

    // eslint-disable-next-line no-console
    console.log('users data', email, name, password);
    toast.success('Cadastrado com sucesso');
    yield put(UserActions.registerSuccess());
    formikRef.current?.resetForm();
    history.push(pages.history);
  } catch (err) {
    if (err.response) {
      Helper.error(err, 'Falha ao autenticar usuário');
    }
    yield put(UserActions.registerFailure());
  }
}

export default all([takeLatest(UserTypes.REGISTER_REQUEST, userRegister)]);
