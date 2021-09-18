import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import LockOutlined from "@material-ui/icons/LockOutlined";
import { signup } from "../Style/signup";
import { connect } from "react-redux";
import { Register } from "../Store/actions/authActions";
import {
  makeStyles,
  Container,
  TextField,
  Button,
  FormLabel,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => signup);

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("The field is mandatory."),
  password: yup.string().required("The field is mandatory."),
  name: yup.string().required("The field is mandatory."),
  confirmPassword: yup.string().required("The field is mandatory."),
});

function SignUp(props) {
  const classes = useStyles();
  const [role, setRole] = useState(0);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      skills: "",
      userRole: role,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.Register(values);
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
            Sign Up
          </FormLabel>
          <form onSubmit={formik.handleSubmit}>
            <FormLabel
              style={{ fontSize: "14px", color: "black" }}
              component="legend"
            >
              I’m a*
            </FormLabel>
            <div>
              <Button
                variant="contained"
                onClick={(e) => {
                  setRole(1);
                }}
                style={role === 1 ? { background: "#43AFFF" } : null}
                startIcon={<LockOutlined />}
              >
                Recruiter
              </Button>
              <Button
                variant="contained"
                onClick={(e) => {
                  setRole(0);
                }}
                style={
                  role === 0
                    ? { marginLeft: "21px", background: "#43AFFF" }
                    : { marginLeft: "21px" }
                }
                startIcon={<LockOutlined />}
              >
                Candidate
              </Button>
            </div>
            <FormLabel
              style={{ fontSize: "14px", marginTop: "20px", color: "black" }}
              component="legend"
            >
              Full Name*
            </FormLabel>
            <TextField
              margin="normal"
              fullWidth
              name="name"
              type="text"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <FormLabel
              style={{ fontSize: "14px", color: "black" }}
              component="legend"
            >
              Email address*
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
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <div className={classes.list}>
              <div className={classes.pass}>
                <FormLabel
                  style={{ fontSize: "14px", color: "black" }}
                  component="legend"
                >
                  Create Password*
                </FormLabel>
                <TextField
                  margin="normal"
                  name="password"
                  type="password"
                  variant="outlined"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </div>

              <div className={classes.pass}>
                <FormLabel
                  style={{ fontSize: "14px", color: "black" }}
                  component="legend"
                >
                  Confirm Password*
                </FormLabel>
                <TextField
                  margin="normal"
                  name="confirmPassword"
                  type="password"
                  variant="outlined"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
              </div>
            </div>

            <FormLabel
              style={{ fontSize: "14px", color: "black", marginTop: "18px" }}
              component="legend"
            >
              Skills
            </FormLabel>
            <TextField
              margin="normal"
              fullWidth
              name="skills"
              type="text"
              variant="outlined"
              value={formik.values.skills}
              onChange={formik.handleChange}
              error={formik.touched.skills && Boolean(formik.errors.skills)}
              helperText={formik.touched.skills && formik.errors.skills}
            />

            <Typography className={classes.typo} align="center">
              <Button
                className="btn"
                style={{ color: "white", background: "#43AFFF" }}
                variant="contained"
                type="submit"
              >
                Signup
              </Button>
              <div className={classes.footer}>
                Have an account?
                <Link className={classes.link} to="/login">
                  Login
                </Link>
              </div>
            </Typography>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default connect(null, { Register })(SignUp);
