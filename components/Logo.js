import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        width: "fit-content",
        padding: "27px 0px 28px 0px",
        fontWeight: "bold",
        fontSize: 13,
        background: "linear-gradient(90deg, rgba(255,92,1,1) 0%, rgba(255,210,95,1) 100%)",
        "background-clip": "text",
        "-webkit-background-clip": "text",
        textFillColor: "transparent"
    }
});
  
const Logo = () => {
    const classes = useStyles();
    return (
        <p className={classes.root}>
            Logo
        </p>
    )
};

export default Logo;