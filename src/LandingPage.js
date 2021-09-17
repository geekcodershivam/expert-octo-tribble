
import { makeStyles, Container } from "@material-ui/core";
import BannerImage from "./component/BannerImage";
import HomeItems from "./component/HomeItems";
import Banner from "./component/Banner";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  section1: {
    background: "#edf6ff 0% 0% no-repeat padding-box",
    opacity: 1,
  },
  section2: {
    height: "400px",
    background:
      "transparent linear-gradient(248deg, #303f60 0%, #1a253c 100%) 0% 0% no-repeat padding-box",
    opacity: 1,
  },
}));
export default function LandingPage() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.section2}>
        <BannerImage/>
      </div>
      <div className={classes.section1}>
        <Container className={classes.root} maxWidth="md">
          <HomeItems />
          <Banner />
        </Container>
      </div>
    </>
  );
}
