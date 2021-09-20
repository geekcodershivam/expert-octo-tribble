import React,{useEffect,useState} from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { login } from "../../Styles/login";
import axios from "axios";
import {
  makeStyles,
  Container,
  TextField,
  Button,
  FormLabel,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(() => login);

const validationSchema = yup.object({
  Newpassword: yup.string().required("Incorrect password."),
  Confirmpassword: yup
    .string()
    .required("Incorrect password."),
});

export default function ResetPassword() {
  const history = useHistory();
const [error,setError]=useState(false);
  useEffect(() => {
    axios({
      method: 'get',
      url: `auth/resetpassword/${localStorage.getItem('reset')}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
       console.log(res);
      })
      .catch((err) => {
       console.log(err);
       history.push("/");
      });
   
  }, [localStorage.getItem('reset')])


  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      Newpassword: "",
      Confirmpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      axios({
        method: 'post',
        url: "/auth/resetpassword",
        data: JSON.stringify({
          ...values,
          token:localStorage.getItem("reset"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res.data);
          localStorage.removeItem("reset");
          history.push("/");
        })
        .catch((err) => {
          console.log(err.response)
          setError(true);
        });
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
            Reset Your Password
          </FormLabel>
          <FormLabel
                style={{ fontSize: "14px", color: "black" ,marginBottom:"25px" }}
                component="legend"
              >
              Enter your new password below.
              </FormLabel>
          <form onSubmit={formik.handleSubmit}>
            <FormLabel
              style={{ fontSize: "14px", color: "black" }}
              component="legend"
            >
              New password
            </FormLabel>
            <TextField
              fullWidth
              margin="normal"
              id="email outlined-basic"
              name="Newpassword"
              type="password"
              placeholder="Enter your password"
              variant="outlined"
              value={formik.values.Newpassword}
              onChange={formik.handleChange}
              error={
                formik.touched.Newpassword && Boolean(formik.errors.Newpassword)
              }
            />
            <FormLabel
              style={{ fontSize: "14px", color: "black" }}
              component="legend"
            >
              Confirm new password
            </FormLabel>
            <TextField
              fullWidth
              margin="normal"
              name="Confirmpassword"
              type="password"
              variant="outlined"
              placeholder="Enter your password"
              value={formik.values.Confirmpassword}
              onChange={formik.handleChange}
              error={
                error===true ||(formik.touched.Confirmpassword &&
                Boolean(formik.errors.Confirmpassword))
              }
              helperText={
                error===true?"Error": (formik.touched.Confirmpassword && formik.errors.Confirmpassword)
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
            </Typography>
          </form>
        </div>
      </div>
    </Container>
  );
}
