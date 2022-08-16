import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

// material-ui
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project import
import FirebaseSocial from "./FirebaseSocial";
import AnimateButton from "components/@extended/AnimateButton";
import {
  strengthColor,
  strengthIndicator,
} from "utils/password-strength";

// assets
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import authApi from "api/authApi";

interface LevelState {
  color: string;
  label: string;
}
interface RegisterData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
const AuthRegister = () => {
  const [levelPassword, setLevelPassword] = useState<LevelState | undefined>();
  const [levelPasswordCf, setLevelPasswordCf] = useState<
    LevelState | undefined
  >();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowPasswordCf = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setLevelPassword(strengthColor(temp));
  };
  const changePasswordCf = (value: string) => {
    const temp = strengthIndicator(value);
    setLevelPasswordCf(strengthColor(temp));
  };
  useEffect(() => {
    changePassword("");
    changePasswordCf("");
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          password_confirmation: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          first_name: Yup.string().max(255).required("First Name is required"),
          last_name: Yup.string().max(255).required("Last Name is required"),
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
          password_confirmation: Yup.string()
            .max(255)
            .required("Password Confirm is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: false });
            setSubmitting(false);
            const data: RegisterData = values;
            const res = await authApi.signup(data);
            console.log(res);
          } catch (err: any) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => {
          return (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="firstname-signup">
                      First Name*
                    </InputLabel>
                    <OutlinedInput
                      id="firstname-signup"
                      type="first_name"
                      value={values.first_name}
                      name="first_name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="John"
                      fullWidth
                      error={Boolean(touched.first_name && errors.first_name)}
                    />
                    {touched.first_name && errors.first_name && (
                      <FormHelperText error id="helper-text-firstname-signup">
                        {errors.first_name}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="lastname-signup">
                      Last Name*
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.last_name && errors.last_name)}
                      id="lastname-signup"
                      type="last_name"
                      value={values.last_name}
                      name="last_name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Doe"
                      inputProps={{}}
                    />
                    {touched.last_name && errors.last_name && (
                      <FormHelperText error id="helper-text-lastname-signup">
                        {errors.last_name}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="email-signup">
                      Email Address*
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.email && errors.email)}
                      id="email-signup"
                      type="email"
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="demo@tlcmodular.com"
                      inputProps={{}}
                    />
                    {touched.email && errors.email && (
                      <FormHelperText error id="helper-text-email-signup">
                        {errors.email}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="password-signup">Password</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.password && errors.password)}
                      id="password-signup"
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      name="password"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                        changePassword(e.target.value);
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="large"
                          >
                            {showPassword ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      placeholder="******"
                      inputProps={{}}
                    />
                    {touched.password && errors.password && (
                      <FormHelperText error id="helper-text-password-signup">
                        {errors.password}
                      </FormHelperText>
                    )}
                  </Stack>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Box
                          sx={{
                            bgcolor: levelPassword?.color,
                            width: 85,
                            height: 8,
                            borderRadius: "7px",
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" fontSize="0.75rem">
                          {levelPassword?.label}
                        </Typography>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="passwordconfirm-signup">
                      Password Confirm
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(
                        touched.password_confirmation &&
                        errors.password_confirmation
                      )}
                      id="passwordconfirm-signup"
                      type={showPasswordConfirm ? "text" : "password"}
                      value={values.password_confirmation}
                      name="password_confirmation"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                        changePasswordCf(e.target.value);
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordCf}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="large"
                          >
                            {showPasswordConfirm ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      placeholder="******"
                      inputProps={{}}
                    />
                    {touched.password_confirmation &&
                      errors.password_confirmation && (
                        <FormHelperText error id="helper-text-password-signup">
                          {errors.password_confirmation}
                        </FormHelperText>
                      )}
                  </Stack>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Box
                          sx={{
                            bgcolor: levelPasswordCf?.color,
                            width: 85,
                            height: 8,
                            borderRadius: "7px",
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" fontSize="0.75rem">
                          {levelPasswordCf?.label}
                        </Typography>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    By Signing up, you agree to our &nbsp;
                    <Link variant="subtitle2" component={RouterLink} to="#">
                      Terms of Service
                    </Link>
                    &nbsp; and &nbsp;
                    <Link variant="subtitle2" component={RouterLink} to="#">
                      Privacy Policy
                    </Link>
                  </Typography>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <AnimateButton type="scale">
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Create Account
                    </Button>
                  </AnimateButton>
                </Grid>
                <Grid item xs={12}>
                  <Divider>
                    <Typography variant="caption">Sign up with</Typography>
                  </Divider>
                </Grid>
                <Grid item xs={12}>
                  <FirebaseSocial />
                </Grid>
              </Grid>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default AuthRegister;
