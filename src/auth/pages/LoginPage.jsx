import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useMemo, useState } from 'react';

const formData = {
  email: '',
  password: ''
};
const formValidations = {
  email: [(value) => value.length >= 1, 'Email is required.'],
  password: [(value) => value.length >= 1, 'Password is required.']
};
export const LoginPage = () => {
  // #region REDUX SELECTORS
  const { status, errorMessage } = useSelector((state) => state.auth);
  // #endregion

  // #region CUSTOM HOOKS & LOCAL STATE
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { email, password, emailValid, passwordValid, isFormValid, onInputChange } = useForm(
    formData,
    formValidations
  );
  // #endregion

  // #region REDUX DISPATCH
  const dispatch = useDispatch();
  // #endregion

  // #region MEMOIZED VALUES
  const isAuthenticating = useMemo(() => status === 'checking', [status]);
  // #endregion

  // #region HANDLER FUNCTIONS

  // * Handler for form submission
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  // * Handler for Google sign-in
  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  };

  // #endregion

  return (
    <AuthLayout title="Login">
      <form className="animate__animated animate__fadeIn animate_faster" onSubmit={onSubmit}>
        <Grid container>
          {/* Form Fields */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@email.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          {/* Buttons */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={errorMessage ? '' : 'none'}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
                onClick={() => {}}>
                Login
              </Button>
            </Grid>

            {/* Register Link */}
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
                onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create New Account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
