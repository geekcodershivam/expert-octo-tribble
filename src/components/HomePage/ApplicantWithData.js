import React from 'react'
import { makeStyles,Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles(() => ({
  main:{
        display: "flex",
        flexDirection: "column",
        padding: "14px",
        border: "1px solid #303F6080",
        borderRadius: "5px",
        backgroundColor: "white",

  },
    root:{
         width:"100%",
         display:"grid",
    },
    Avatar:{
      backgroundColor: "#D9EFFF",
      color: "#303F60",
    },
    title:{
      display: "flex",
      flexDirection: "column",
    },h3:{
      margin:0,
      fontSize: "15px",
      fontWeight: 300,
    },
    h5:{
      margin:5
    }

}));

export default function ApplicantWithData({ele}) {
    const classes = useStyles();
    return (
        <div className={classes.main}>
        <Box
          className={classes.root}
          gridTemplateColumns={["1fr", " 1fr 3fr", "1fr 3fr"]}
          gridGap={[1]}
        >
          <Avatar className={classes.Avatar}>
            {ele.name[0].toUpperCase()}
          </Avatar>
          <div className={classes.title}>
            <h3 className={classes.h3}>{ele.name}</h3>
            <h3 className={classes.h3}>{ele.email}</h3>
          </div>
        </Box>
        <div className={classes.title}>
          <h5 className={classes.h5}>{"Skills"}</h5>
          <p className={classes.para}>{ele.skills}</p>
        </div>
      </div>
    )
}
