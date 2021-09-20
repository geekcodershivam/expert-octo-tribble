import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, Divider } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ApplicantZero from "./ApplicantZero";
import { applicantStyle } from "../../Styles/joblist";
import ApplicantWithData from "./ApplicantWithData";
const useStyles = makeStyles(() => applicantStyle);
export default function Application(props) {
  const classes = useStyles();
  const [total, setTotal]= useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `/recruiters/jobs/${props.id}/candidates`,
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (
          res.data.message === "No candidates have applied for the job posting"
        ) {
          setTotal(res.data?res.data:[])
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);
  return (
    <div>
      <div className={classes.root}>
        <h5 className={classes.h5}>Applicants for this job</h5>
        <CloseIcon className={classes.close} onClick={props.handleClose} />
      </div>
      <Divider className={classes.line} />
      <h4 className={classes.h4}>{`${total.length?total.length:0} applications`}</h4>
      {!total.length ? <ApplicantZero /> : 

      <>
       <div
      display="grid"
      gridTemplateColumns={["1fr", " 1fr 1fr", "1fr 1fr"]}
      gridGap={"30px"}
      style={{
        overflowY: "scroll",
        backgroundColor: "#557DA526",
        padding: "8px",
        borderRadius: "5px",
      }}
    >
      {total&&
        total.map((ele,idx) => {
          return <ApplicantWithData key={idx} ele={ele} />;
        })}
    </div>
      </>
      }
    </div>
  );
}
