import React from "react";
import { makeStyles, Modal } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Application from "./Application";
import { list } from "../../Styles/joblist";
const useStyles = makeStyles(() => list);

export default function Joblist(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderlist = () => {
    return props.jobPost.map((ele, idx) => {
      return (
        <div key={idx} className={classes.list}>
          <div className={classes.text}>
            <h5 className={classes.h5}>{ele.title}</h5>
            <p className={classes.para}>{ele.description}</p>
            <div className={classes.loc}>
              <div className={classes.locItem}>
                <LocationOnIcon style={{ color: "#43AFFF" }} />
                <p className={classes.para}>{ele.location}</p>
              </div>
              <div
                className={classes.btn}
                onClick={(e) => {
                  setId(ele.id);
                  handleOpen();
                }}
              >
                View applications
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  const body = (
    <div className={classes.paper}>
      <Application handleClose={handleClose} id={id} />
    </div>
  );

  return (
    <div className={classes.items}>
      {renderlist()}
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
