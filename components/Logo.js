import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        fontWeight: "bold",
        fontSize: 13,
        background: "linear-gradient(90deg, #FF5C01 0%, #FFD25F 93.79%)",
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