import React from 'react'
import { makeStyles} from "@material-ui/core";
const useStyles = makeStyles(() => ({
    item1: {
        height:234,
        background: "transparent linear-gradient(253deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box",
        opacity: 1
    }
  }));
export default function Layout(props){
    
    const classes = useStyles();
    return <div className={classes.item1}>
        {props.children}
    </div>
}
