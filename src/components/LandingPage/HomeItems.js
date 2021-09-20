import React from "react";
import { makeStyles } from "@material-ui/core";
import { items } from "../../Styles/LandingPageStyle";
import { TitleList } from "../../assets/TitleList";
const useStyles = makeStyles(() => items);
const data = TitleList;
export default function HomeItems() {
  const classes = useStyles();
  const renderList = () => {
    return data.map((ele) => {
      return (
        <div className={classes.boxItem}>
          <div className={classes.textItem}>
            <h5 className={classes.h5}>{ele}</h5>
            <p className={classes.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.items}>
      <h6 className={classes.h6}>Why Us</h6>
      <div className={classes.box}>{renderList()}</div>
    </div>
  );
}
