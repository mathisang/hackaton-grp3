import {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Card, CardContent, CardHeader, Grid, InputAdornment, TextField} from '@mui/material';
import {useAppStore} from '../../../store';
import {AppButton, AppIconButton} from '../../../components';
import {AppAlert, AppForm} from '../../../components/forms';
import {eventPreventDefault, SHARED_CONTROL_PROPS, useAppForm} from '../../../utils/form';
import {api} from '../../../api';

const VALIDATE_FORM_LOGIN_EMAIL = {
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
      maximum: 32,
      message: 'must be between 8 and 32 characters',
    },
  },
};

/**
 * Renders "Login with Email" view for Login flow
 * url: /auth/login/email/*
 */
const LoginEmailView = () => {
  const navigate = useNavigate();
  const [, dispatch] = useAppStore();
  const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError] = useAppForm({
    validationSchema: VALIDATE_FORM_LOGIN_EMAIL,
    initialValues: { email: '', password: '' },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();
  const values = formState.values; // Typed alias to formState.values as the "Source of Truth"

  const handleShowPasswordClick = useCallback(() => {
    setShowPassword((oldValue) => !oldValue);
  }, []);

  const handleFormSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const result = await api?.auth?.login(values);
      if (!result) {
        setError('Identifiant ou mot de passe incorrects');
        return; // Unsuccessful login
      }

      dispatch({ type: 'LOG_IN', payload: result });
      navigate('/', { replace: true });
    },
    [dispatch, values, navigate]
  );

  const handleCloseError = useCallback(() => setError(undefined), []);

  return (
    <AppForm onSubmit={handleFormSubmit}>
      <Card>
        <CardHeader title="Connexion" />
        <CardContent>
          <TextField
            required
            label="Email"
            name="email"
            value={values.email}
            error={fieldHasError('email')}
            helperText={fieldGetError('email') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
          />
          <TextField
            required
            type={showPassword ? 'text' : 'password'}
            label="Mot de passe"
            name="password"
            value={values.password}
            error={fieldHasError('password')}
            helperText={fieldGetError('password') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AppIconButton
                    aria-label="toggle password visibility"
                    icon={showPassword ? 'visibilityon' : 'visibilityoff'}
                    title={showPassword ? 'Hide Password' : 'Show Password'}
                    onClick={handleShowPasswordClick}
                    onMouseDown={eventPreventDefault}
                  />
                </InputAdornment>
              ),
            }}
          />
          {error ? (
            <AppAlert severity="error" onClose={handleCloseError}>
              {error}
            </AppAlert>
          ) : null}
          <Grid container justifyContent="center" alignItems="center">
            <AppButton type="submit" disabled={!formState.isValid}>
              Se connecter
            </AppButton>
          </Grid>
        </CardContent>
      </Card>
    </AppForm>
  );
};

export default LoginEmailView;
