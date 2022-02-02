import CustomInput from "@/components/CustomInput";
import CustomSlider from "@/components/CustomSlider";
import Logo from "@/components/Logo";
import PageMeta from "@/meta/pageMeta";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    
  },
  upperWrapper: {
    
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
        
      </div>
    </main>
  )
};

export default Home;
