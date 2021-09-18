import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import {
  makeStyles,
  Container,
  TextField,
  Button,
  FormLabel,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  box: {
    width: "500px",
    marginTop: "123px",
    height: "435px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 30px 36px #557DA526",
    borderRadius: "20px",
    opacity: 1,
  },
  form: {
    margin: "26px",
    marginTop: "30px",
  },
  list: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  },
  typo:{
    marginTop:"27px"
  }
  ,link:{
    textDecoration: "none",
    color:"#43AFFF",
  },
  footer:{
    marginTop: "20px",
  },
  
}));

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Incorrect email address or password."),
});

export default function Login() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
              error={formik.touched.email && Boolean(formik.errors.email)}
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
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Typography className={classes.typo} align="center">
              <Button
                className="btn"
                style={{ color: "white",background:"#43AFFF"}}
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
