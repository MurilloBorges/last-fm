import { useCallback, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

import ComponentInputAnimated from '../../components/input/Animated';
import ComponentLoadingButton from '../../components/loading/Button';
import { ApplicationState } from '../../store';
import * as AuthActions from '../../store/modules/auth/actions';
import * as UserActions from '../../store/modules/user/actions';
import colors from '../../styles/colors';
import {
  BtnGlobal,
  Container,
  ContainerHeader,
  H2,
  H4,
  MainContainer,
  Subtitle,
} from '../../styles/general';
import {
  AuthButtons,
  AuthContainer,
  AuthForm,
  AuthOptions,
  SignInContent,
  SignUpContent,
} from './styles';

export interface SignInFormValues {
  email: string;
  password: string;
}

export interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const formikSignInRef = useRef<FormikProps<SignInFormValues>>(null);
  const formikSignUpRef = useRef<FormikProps<SignUpFormValues>>(null);

  const loadingSignIn = useSelector(
    (state: ApplicationState) => state.loading.data.signIn
  );
  const loadingSignUp = useSelector(
    (state: ApplicationState) => state.loading.data.register
  );

  const schemaSignIn = Yup.object().shape({
    email: Yup.string()
      .email('Informe um e-mail válido')
      .required('Informe o seu e-mail'),
    password: Yup.string().required('Informe sua senha'),
  });

  const schemaSignUp = Yup.object().shape({
    name: Yup.string().required('Informe seu nome'),
    email: Yup.string()
      .email('Informe um e-mail válido')
      .required('Informe o seu e-mail'),
    password: Yup.string().required('Informe sua senha'),
  });

  const handleSignUp = useCallback(
    ({
      email,
      name,
      password,
    }: {
      email: string;
      name: string;
      password: string;
    }) => {
      dispatch(
        UserActions.registerRequest(email, name, password, formikSignUpRef)
      );
    },
    [dispatch]
  );

  const handleSignIn = useCallback(
    ({ email, password }: { email: string; password: string }) => {
      dispatch(AuthActions.signInRequest(email, password, formikSignInRef));
    },
    [dispatch]
  );

  return (
    <MainContainer>
      <Container>
        <ContainerHeader
          margin="0 0 20px"
          marginIpad="0 0 25px"
          marginIpadPro="0 0 20px"
        >
          <H2
            color={colors.primary}
            fontSize="3em"
            fontWeight="900"
            margin="2em 0 0"
          >
            Seja bem-vindo!
          </H2>

          <Subtitle color={colors.primary} fontSize="1.5em">
            Identifique-se para continuar.
          </Subtitle>
        </ContainerHeader>

        <AuthContainer>
          <SignUpContent>
            <H4 color={colors.primary}>Registre-se</H4>

            <Subtitle color={colors.primary}>
              Ainda não tem uma conta? Crie agora mesmo!
            </Subtitle>

            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
              }}
              innerRef={formikSignUpRef}
              onSubmit={handleSignUp}
              validationSchema={schemaSignUp}
            >
              {({ errors, handleSubmit, touched, values }) => (
                <AuthForm onSubmit={handleSubmit}>
                  <ComponentInputAnimated
                    error={errors.name}
                    field="name"
                    formikRef={formikSignUpRef}
                    icon={() => <FiUser size={18} />}
                    label="Nome completo"
                    touched={touched.name}
                    value={values.name}
                  />

                  <ComponentInputAnimated
                    error={errors.email}
                    field="email"
                    formikRef={formikSignUpRef}
                    icon={() => <FiMail size={18} />}
                    label="E-mail"
                    touched={touched.email}
                    type="email"
                    value={values.email}
                  />

                  <ComponentInputAnimated
                    error={errors.password}
                    field="password"
                    formikRef={formikSignUpRef}
                    icon={() => <FiLock size={18} />}
                    label="Senha"
                    touched={touched.password}
                    type="password"
                    value={values.password}
                  />

                  <AuthButtons>
                    <BtnGlobal type="submit" width="49%" widthIpad="100%">
                      {loadingSignUp ? <ComponentLoadingButton /> : 'Registrar'}
                    </BtnGlobal>
                  </AuthButtons>
                </AuthForm>
              )}
            </Formik>
          </SignUpContent>

          <AuthOptions>OU</AuthOptions>

          <SignInContent>
            <H4 color={colors.primary}>Já sou cadastrado</H4>

            <Subtitle color={colors.primary}>
              Entre e veja seu histórico!
            </Subtitle>

            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              innerRef={formikSignInRef}
              onSubmit={handleSignIn}
              validationSchema={schemaSignIn}
            >
              {({ errors, handleSubmit, touched, values }) => (
                <AuthForm onSubmit={handleSubmit}>
                  <ComponentInputAnimated
                    error={errors.email}
                    field="email"
                    formikRef={formikSignInRef}
                    icon={() => <FiMail size={18} />}
                    label="E-mail"
                    touched={touched.email}
                    type="email"
                    value={values.email}
                  />

                  <ComponentInputAnimated
                    error={errors.password}
                    field="password"
                    formikRef={formikSignInRef}
                    icon={() => <FiLock size={18} />}
                    label="Senha"
                    touched={touched.password}
                    type="password"
                    value={values.password}
                  />

                  <AuthButtons>
                    <BtnGlobal type="submit" width="49%" widthIpad="100%">
                      {loadingSignIn ? <ComponentLoadingButton /> : 'Entrar'}
                    </BtnGlobal>
                  </AuthButtons>
                </AuthForm>
              )}
            </Formik>
          </SignInContent>
        </AuthContainer>
      </Container>
    </MainContainer>
  );
};

export default Login;
