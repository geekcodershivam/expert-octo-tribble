import React from "react";
import { makeStyles, Container,Button } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  box: {
    marginTop: "163px",
    opacity: 1,
  },
  items: {
    display: "grid",
    gridTemplateColumns: "237px 237px 237px 237px",
    gridGap: ".2rem",
  },
  list: {
    width: "229px",
    height: "162px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #557DA526",
    borderRadius: "5px",
    opacity: 1,
  },
  text: {
    margin: "10px",
  },
  h5: {
    margin: "0",
    fontSize: "17px",
    fontWeight:"400"
  },
  para: {
    fontSize: "14px",
  },
  loc: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },locItem:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn:{
    width: "109px",
    height: "32px",
    background: "#43AFFF33 0% 0% no-repeat padding-box",
    borderRadius: "5px",
    opacity: 1,
    fontSize: "12px",
    textAlign: "center",
    paddingTop: "16px",
  }
}));
export default function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <div className={classes.box}>
        <div className={classes.items}>
          <div className={classes.list}>
            <div className={classes.text}>
              <h5 className={classes.h5}>UI UX Designer</h5>
              <p className={classes.para}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt…
              </p>
              <div className={classes.loc}>
                <div className={classes.locItem}>
                  <LocationOnIcon style={{color: "#43AFFF"}}/>
                  <p className={classes.para}>Bengaluru</p>
                </div>
                <div className={classes.btn}>
                View applications
                </div>
              </div>
            </div>
          </div>
          <div className={classes.list}></div>
          <div className={classes.list}></div>
          <div className={classes.list}></div>
        </div>
      </div>
    </Container>
  );
}
