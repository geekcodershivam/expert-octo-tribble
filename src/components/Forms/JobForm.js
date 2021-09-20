import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { jobStyle } from "../../Styles/jobform";
import { connect } from "react-redux";
import axios from "axios";

import {
  makeStyles,
  Container,
  TextField,
  Button,
  FormLabel,
  Typography,
  TextareaAutosize,
} from "@material-ui/core";
import history from "../../Store/history";

const useStyles = makeStyles(() => jobStyle);

const validationSchema = yup.object({
  title: yup.string().required("The field is mandatory."),
  description: yup.string().required("The field is mandatory."),
  location: yup.string().required("The field is mandatory."),
});

function JobForm(props) {
  const classes = useStyles();

  useEffect(() => {
    if (!props.isauth) {
      history.push("/");
    }
  }, [props.isauth]);
  
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      location: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios({
        method: "post",
        url: "/jobs",
        data: JSON.stringify({
          ...values,
        }),
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res.data);
          history.push("/home");
        })
        .catch((err) => {
          console.log(err);
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
            Post a Job
          </FormLabel>
          <form onSubmit={formik.handleSubmit}>
            <FormLabel
              style={{ fontSize: "14px", marginTop: "20px", color: "black" }}
              component="legend"
            >
              Job title*
            </FormLabel>
            <TextField
              margin="normal"
              fullWidth
              name="title"
              type="text"
              variant="outlined"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <FormLabel
              style={{ fontSize: "14px", color: "black" }}
              component="legend"
            >
              Description*
            </FormLabel>
            <TextareaAutosize
              name="description"
              aria-label="empty textarea"
              placeholder="Enter job description"
              style={{ width: "448px", height: "110px" }}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
            <FormLabel
              style={{ fontSize: "14px", color: "black", marginTop: "18px" }}
              component="legend"
            >
              Location*
            </FormLabel>
            <TextField
              margin="normal"
              fullWidth
              name="location"
              type="text"
              variant="outlined"
              value={formik.values.location}
              onChange={formik.handleChange}
              error={formik.touched.location && Boolean(formik.errors.location)}
              helperText={formik.touched.location && formik.errors.location}
            />

            <Typography className={classes.typo} align="center">
              <Button
                className="btn"
                style={{ color: "white", background: "#43AFFF" }}
                variant="contained"
                type="submit"
              >
                Post
              </Button>
            </Typography>
          </form>
        </div>
      </div>
    </Container>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    isauth: state.auth.isAuthenticated,
    error: state.error,
    errorMsg: state.error.msg,
  };
};
export default connect(mapStateToProps, null)(JobForm);
