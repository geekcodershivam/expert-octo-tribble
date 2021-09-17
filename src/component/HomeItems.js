import React from "react";
import { makeStyles} from "@material-ui/core";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  items: {
    top: "606px",
    left: "190px",
    height: "258px",
    opacity: "1",
    paddingTop: "88px",
    fontSize: "22px",
    border: "10px",
  },
  h6: {
    marginLeft: "21px",
    fontSize: "21px",
    fontWeight: "400",
    margin: "0",
    marginBottom: "37px",
  },
  box: {
    display: "flex",
  },

  boxItem: {
    height: "192px",
    margin: "0 15px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #557DA526",
    borderRadius: "5px",
    opacity: 1,
  },
  textItem: {
    margin: "25px",
    textAlign: "left",
  },
  h5: {
    fontFamily: "normal normal medium Helvetica Neue",
    fontSize: "32.4px",
    color: "#43AFFF",
    textTransform: "capitalize",
    margin: "0",
  },
  para: {
    paddingTop: "10px",
    color: "#303F60",
    fontSize: "12px",
  },
  banner: {
    marginTop: "80px",
    height: "201px",
    opacity: "1",
    border: "10px",
  },
  Log: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  imgTag: {
    width: "125px",
    height: "40px",
    marginLeft: "68px",
  },
}));

const data = [
  "Get More Visibility",
  "Organize your candidates",
  "Verify their abilities",
];



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
