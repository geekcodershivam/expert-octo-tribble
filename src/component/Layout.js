import React from 'react'
import { makeStyles, Container } from "@material-ui/core";
const useStyles = makeStyles(() => ({
    item1: {
        height: "264px",
        background: "transparent linear-gradient(253deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box",
        opacity: 1
    },
    item2:{
        background: "#EDF6FF 0% 0% no-repeat padding-box"
    }
  }));
export default function Layout(props) {
    const classes = useStyles();
    return (
        <>
        <div className={classes.item1}>{props.children}</div>
        <div className={classes.item2}></div>
        </>
       
    )
}
