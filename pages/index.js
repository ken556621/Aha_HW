import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomSlider from "@/components/CustomSlider";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import PageMeta from "@/meta/pageMeta";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    padding: "0px 20px",
    backgroundColor: "#181818"
  },
  upperWrapper: {
    minHeight: "calc(100vh - 176px)"
  },
  bottomWrapper: {
    
  }
});

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <PageMeta />
      <div className={classes.upperWrapper}>
        <Logo />
        <h1>
          Search
        </h1>
        <CustomInput />
        <h1>
          # of results per page
        </h1>
        <p>
          <span>
            30
          </span>
          result
        </p>
        <CustomSlider />
      </div>
      <div className={classes.bottomWrapper}>
        <CustomButton 
          type="normal"
          size="normal"
          word="Search"
        />
      </div>
      <Navigation />
    </main>
  )
};

export default Home;
