import React from "react";
import { makeStyles, Container, Box } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import Link from "@material-ui/core/Link";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    display: "flex",
  },
  box: {
    paddingLeft: "173px",
    paddingTop: "12px",
  },
  routerlist: {
    display: "flex",
    alignItems: "center",
    color: "white",
  },
  link: {
    display: "flex",
    color: "white",
    fontSize: "12px",
    fontWeight: "500px",
  },
  icon: {
    marginRight: 0.5,
    width: 20,
    height: 15,
    color: "white",
  },
}));
export default function SideList() {
    const userActive = useSelector((state) => state.auth.isAuthenticated);
  const classes = useStyles();
  const location = useLocation();
  

  const renderlist = (
    userActive && <Container className={classes.root} maxWidth="md">
      <Box className={classes.box}>
        <div className={classes.routerlist}>
          <HomeIcon className={classes.icon} />
          <Link color="inherit" href="/home" className={classes.link}>
            Home
          </Link>
          {location.pathname === "/posted" && (
            <>
              &nbsp; &gt; &nbsp;
              <Link color="inherit" className={classes.link}>
                Post a Job
              </Link>
            </>
          )}
        </div>
      </Box>
    </Container>
  );
      return renderlist
}
