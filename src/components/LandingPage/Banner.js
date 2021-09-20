import React from "react";
import { makeStyles } from "@material-ui/core";
import { ImageList } from "../../assets/ImageList";
import { banner } from "../../Styles/LandingPageStyle";
const useStyles = makeStyles(() => banner);
const link = ImageList;
export default function Banner() {
  const classes = useStyles();
  const renderImgTab = (Tabname) => {
    return (
      <div className={classes.Logo}>
        {link[Tabname].map((ele, idx) => {
          return (
            <img key={idx} className={classes.imgTag} src={ele} alt={idx} />
          );
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
