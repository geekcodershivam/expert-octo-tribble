import React,{useState} from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { forgetpassword } from "../../Styles/login";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Container,
  TextField,
  Button,
  FormLabel,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => forgetpassword);

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

export default function Forgetpassword() {
  const history = useHistory();
  const classes = useStyles();
  const [message, setMessage]=useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios({
        method: 'get',
        url: `/auth/resetpassword?email=${values.email}`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          localStorage.setItem("reset",res.data.data.token)
          history.push("/reset");
        })
        .catch((err) => {
         setMessage(false)
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
           Forgot your password?
          </FormLabel> 
          <FormLabel
                style={{ fontSize: "14px", color: "black" ,marginBottom:"25px" }}
                component="legend"
              >
               Enter the email associated with your account and we’ll send you instructions to reset your password.
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
              placeholder="Enter your email"
              error={
                message || (formik.touched.email && Boolean(formik.errors.email))
              }
              helperText={message? "Invaild Email" : formik.touched.title && formik.errors.title}
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