import React from 'react'
import { makeStyles, Container } from "@material-ui/core";
const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
    },
    box:{
        width: "500px",
        marginTop: "123px",
        height: "400px",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 30px 36px #557DA526",
        borderRadius: "20px",
        opacity: 1,
    }
}));

export default function Login() {
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth="sm">
            <div className={classes.box}>
                
            </div>
            

        </Container>
    )
}
