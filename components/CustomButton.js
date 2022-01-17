import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  btnRoot: {
    width: (props) => props.type === "normal" ? 335 : 60,
    background: "#FFFFFF",
    color: "#121212",

    "&:hover": {
        background: "#121212",
        color: "#FFFFFF",
    }
  },
});

const CustomButton = ({
    type = "normal", // normal, outlined, contained
    word = "BUTTON"
}) => {
    const classes = useStyles({
        type
    });
    
    return (
        <Button
            classes={{
                root: classes.btnRoot
            }}
            variant="contained"
        >
            {word}
        </Button>
    )
};

export default CustomButton;