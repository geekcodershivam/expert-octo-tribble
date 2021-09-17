import React from "react";
import { makeStyles} from "@material-ui/core";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  h6: {
    fontSize: "24px",
    fontWeight: "400",
    margin: "0",
    marginBottom: "37px",
    marginLeft: "10px",
  },
  banner: {
    marginTop: "80px",
    height: "236px",
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
    marginLeft: "57px",
  },
}));
const link = {
    "tab-1": [
      "https://leafletgroup.com/wp-content/uploads/24.png",
      "https://leafletgroup.com/wp-content/uploads/17.png",
      "https://leafletgroup.com/wp-content/uploads/18.png",
      "https://leafletgroup.com/wp-content/uploads/30-2.png",
      "https://leafletgroup.com/wp-content/uploads/17.png",
    ],
    "tab-2": [
      "https://leafletgroup.com/wp-content/uploads/13.png",
      "https://leafletgroup.com/wp-content/uploads/16.png",
      "https://leafletgroup.com/wp-content/uploads/20.png",
      "https://leafletgroup.com/wp-content/uploads/28.png",
    ],
  };
export default function Banner() {
    
    const classes = useStyles();
    const renderImgTab = (Tabname) => {
        return (
          <div className={classes.Logo}>
            {link[Tabname].map((ele) => {
              return <img className={classes.imgTag} src={ele} />;
            })}
          </div>
        );
      };

  return (
    
      <div className={classes.banner}>
        <h6 className={classes.h6}>Companies Who Trust Us</h6>
        {renderImgTab("tab-1")}
        <div style={{ margin: "46px 86px 46px" }}>{renderImgTab("tab-2")}</div>
      </div>
    
  );
}
