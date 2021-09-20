import { makeStyles, Container } from "@material-ui/core";
import BannerImage from "../components/LandingPage/BannerImage";
import HomeItems from "../components/LandingPage/HomeItems";
import Banner from "../components/LandingPage/Banner";
import { mainPage } from "../Styles/LandingPageStyle";
const useStyles = makeStyles(() => mainPage);
export default function LandingPage() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.section2}>
        <BannerImage />
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
