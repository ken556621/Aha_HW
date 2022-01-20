import Button from "@mui/material/Button";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  btnRoot: {
    width: props => props.size === "small" ? 60 : 335,
    padding: props => props.size === "small" ? "8px 10px" : 0,
    boxShadow: "none",
    fontSize: 12,
    fontWeight: 600,
    fontFamily: "Open Sans",
    textTransform: props => props.size === "small" ? "capitalize" : "uppercase"
  },
  normalBtnRoot: {
    background: "#FFFFFF",
    color: "#121212",

    "&:hover": {
        background: "#121212",
        color: "#FFFFFF",
    }
  },
  outlinedBtnRoot: {
    background: "#121212",
    color: "#FFFFFF",
    borderRadius: 20,
    border: "1px solid #fff",

    "&:hover": {
        background: "#FFFFFF",
        color: "#121212",
        border: "1px solid #121212"
    }
  },
  containedBtnRoot: {
    background: "#FFFFFF",
    color: "#121212",
    borderRadius: 20,
    border: "1px solid #121212",

    "&:hover": {
        background: "#121212",
        color: "#FFFFFF",
        border: "1px solid #fff"
    }
  },
});

const CustomButton = ({
    type = "contained", // normal, outlined, contained
    word = "button",
    size = "small" // small, normal
}) => {
    const classes = useStyles({
        size
    });

    switch (type) {
        case "normal":
            return (
                <Button
                    classes={{
                        contained: clsx(classes.btnRoot, classes.normalBtnRoot)
                    }}
                    variant="contained"
                >
                    {word}
                </Button>
            )
        case "outlined":
            return (
                <Button
                    classes={{
                        outlined: clsx(classes.btnRoot, classes.outlinedBtnRoot)
                    }}
                    variant="outlined"
                >
                    {word}
                </Button>
            )
        case "contained":
            return (
                <Button
                    classes={{
                        outlined: clsx(classes.btnRoot, classes.containedBtnRoot)
                    }}
                    variant="outlined"
                >
                    {word}
                </Button>
            )
        default:
            break;
    }
};

export default CustomButton;