import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles, Container, Button, Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Joblist from "../components/HomePage/Joblist";
import { useHistory } from "react-router-dom";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFileOutlined";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "741px",
  },
  box: {
    marginTop: "163px",
    opacity: 1,
    display: "grid",
    justifyItems: "center",
    alignContent: "space-between",
  },
  h5: {
    position: "absolute",
    marginTop: "112px",
    fontSize: "22px",
    color: "#FFFFFF",
  },
}));
export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [count, setCout] = useState({});
  const [jobPost, setjobPost] = useState([]);
  const selectedData = useSelector((state) => state.auth.token);
  const isuser = useSelector((state) => state.auth.isAuthenticated);

  function handleClick() {
    history.push("/posted");
  }

  useEffect(() => {
    if (!isuser) {
      history.push("/");
    }
  }, [isuser]);

  useEffect(() => {
    let url = `/recruiters/jobs/?page=${page}`;
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: selectedData,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          history.push("/");
        }
      })
      .then((data) => {
        if (data && data.data) {
          setCout(data.data.metadata);
          setjobPost(data.data.data);
        }
      });
  }, []);
  const renderJobList = (e, pageName) => {
          setPage(pageName);
  };

  const renderlist = (
    <div className={classes.box}>
      <Joblist jobPost={jobPost} />
      <div>
        <Pagination
          count={
            count &&
            Math.round(count.count / count.limit) +
              (count.count % count.limit && 1)
          }
          variant="outlined"
          shape="rounded"
          onChange={renderJobList}
        />
      </div>
    </div>
  );
  const error = (
    <Box
      type="column"
      justifyContent="center"
      alignItems="center"
      style={{
        marginTop: "134px",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <InsertDriveFileIcon
        style={{
          color: "#A9AFBC",
          fontSize: 163,
        }}
      />
      <h5 style={{ fontSize: 19, fontWeight: 400 }}>
        Your posted jobs will show here!
      </h5>
      <Button
        style={{
          width: "148px",
          height: "46px",
          background: "#43AFFF 0% 0% no-repeat padding-box",
          border: "1px solid #43AFFF",
          borderRadius: "5px",
          opacity: 1,
          color: "#ffff",
        }}
        onClick={(e) => {
          handleClick();
        }}
      >
        {" "}
        Post a Job
      </Button>
    </Box>
  );

  const items = jobPost.length === 0 ? error : renderlist;

  return (
    <Container
      style={
        jobPost.length === 0
          ? {
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }
          : null
      }
      className={classes.root}
      maxWidth="md"
    >
      <h5
        className={classes.h5}
        style={
          jobPost.length === 0
            ? {
                marginRight: "54%",
              }
            : null
        }
      >
        Jobs posted by you
      </h5>
      {items}
    </Container>
  );
}
