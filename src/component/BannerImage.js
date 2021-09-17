import React from "react";
import { makeStyles, Container, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    marginTop: "0",
    width: "334px",
    textAlign: "left",
    letterSpacing: "0px",
    opacity: "1",
    fontSize: "59px",
    color: "white",
    fontWeight: "300",
    marginBottom: "40px",
  },
  btn: {
    background: "#43AFFF 0% 0% no-repeat padding-box",
    color: "white",
    fontWeight: "600",
  },
  jobs:{
    color: "#43AFFF",
    fontWeight:"700"
  }, ImgItem:{
    width: "523px",
    height: "357px",
    boxShadow: "0px 30px 36px #557da526",
    borderRadius: "20px",
    opacity: 1,
    marginTop: "88px",
  }
}));

export default function BannerImage() {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <div className={classes.title}>
        <h4 className={classes.titleText}>Welcome to My<span className={classes.jobs}>Jobs</span></h4>
        <Button variant="contained" className={classes.btn}>
          Get Started
        </Button>
      </div>
      <img
       className={classes.ImgItem}
        src="https://www.papirfly.com/hubfs/Header%20images-22.png"
      />
    </Container>
  );
}
