import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Box, Button } from "@material-ui/core";
import MenuList from "../components/NavBar/MenuList"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(() => ({
  root: {
    padding: "0px 70px",
    background:
      "transparent linear-gradient(260deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box",
  },
  btn: {
    background: "#43AFFF33 0% 0% no-repeat padding-box",
    border: "1px solid #43AFFF",
    borderRadius: "5px",
    opacity: 1,
    textAlign: "center",
    font: "14px",
    letterSpacing: "0px",
    color: "#FFFFFF",
    margin: "5px",
    fontWeight: "500",
  },
  h5: {
    width: "82px",
    height: "26px",
    fontSize: 22,
    margin:0,
    color: "#ffff",
  },
  jobs: {
    color: "#43AFFF",
    fontWeight: "700",
  },
}));

export default function Header() {
  const history = useHistory();
  const classes = useStyles();
  const userActive= useSelector((state) => state.auth.isAuthenticated);
  function handleClick() {
    history.push("/login");
  }

  return (
    <header>
      <div className={classes.root}>
        <Box
          type="row"
          px={8}
          style={{
            padding: "0px 70px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <div>
              <h5 className={classes.h5}>
                My<span className={classes.jobs}>Jobs</span>
              </h5>
            </div>
          </Link>
          <Box>
            {!userActive ? (
              <Box py={"6px"}>
                {" "}
                <Button
                  className={classes.btn}
                  onClick={(e)=>{
                  handleClick();
                  }}
                >
                  Login/Signup
                </Button>
              </Box>
            ) : (
                <MenuList/>
            )}
          </Box>
        </Box>
        <Box
        style={{
          height: "1px",
          margin: " 0px 50px",
          borderBottom: "1px solid #4D618E",
        }}
      >
        &nbsp;
      </Box>
      </div>
    </header>
  );
}
