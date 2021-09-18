import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { login } from "../Style/login";
import { Authlogin } from "../Store/actions/authActions";
import { connect } from "react-redux";
import {
  makeStyles,
  Container,
  TextField,
  Button,
  FormLabel,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => login);

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Incorrect email address or password."),
});

function Login(props) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.Authlogin(values);
    },
  });
  return (
    <Container className={classes.root} maxWidth="sm">
      <div className={classes.box}>
        <div className={classes.form}>
          <FormLabel
            style={{
              marginBottom: "inherit",
              fontSize: "22px",
              fontWeight: "600",
              color: "black",
            }}
            component="legend"
          >
            Login
          </FormLabel>
          <form onSubmit={formik.handleSubmit}>
            <FormLabel
              style={{ fontSize: "14px", color: "black" }}
              component="legend"
            >
              Email address
            </FormLabel>
            <TextField
              fullWidth
              margin="normal"
              id="email outlined-basic"
              name="email"
              type="email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={
                props.error.status === 401 ||
                (formik.touched.email && Boolean(formik.errors.email))
              }
            />
            <div className={classes.list}>
              <FormLabel
                style={{ fontSize: "14px", color: "black" }}
                component="legend"
              >
                Password
              </FormLabel>

              <Link className={classes.link} to="">
                Forgot your password?
              </Link>
            </div>
            <TextField
              fullWidth
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={
                props.error.status === 401 ||
                (formik.touched.password && Boolean(formik.errors.password))
              }
              helperText={
                props.error.status === 401
                  ? "Incorrect email address or password."
                  : formik.touched.password && formik.errors.password
              }
            />
            <Typography className={classes.typo} align="center">
              <Button
                className="btn"
                style={{ color: "white", background: "#43AFFF" }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
              <div className={classes.footer}>
                New to MyJobs?
                <Link className={classes.link} to="/signup">
                  Create an account
                </Link>
              </div>
            </Typography>
          </form>
        </div>
      </div>
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { error: state.error, errorMsg: state.error.msg };
};
export default connect(mapStateToProps, { Authlogin })(Login);
