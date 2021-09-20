import React from "react";
import { makeStyles, Container, Button } from "@material-ui/core";
import { imgBanner } from "../../Styles/LandingPageStyle";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(() => imgBanner);

export default function BannerImage() {
  const history = useHistory();
  const classes = useStyles();
  function handleClicklink() {
    history.push("/login");
  }
  return (
    <Container className={classes.root} maxWidth="md">
      <div className={classes.title}>
        <h4 className={classes.titleText}>
          Welcome to My<span className={classes.jobs}>Jobs</span>
        </h4>
        <Button variant="contained" onClick={(e)=>{
           handleClicklink()
        }} className={classes.btn}>
          Get Started
        </Button>
      </div>
      <img
        className={classes.ImgItem}
        src="https://www.papirfly.com/hubfs/Header%20images-22.png"
        alt="header"
      />
    </Container>
  );
}
