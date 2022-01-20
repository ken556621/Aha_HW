import OutlinedInput from "@mui/material/OutlinedInput";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles({
  outlinedInputRoot: {
    "& input": {
        border: "3px solid rgba(255, 255, 255, 0.5)",
        borderRadius: 6,
        padding: 10
    }
  },
  outlinedInputfocused: {
    "& input": {
        border: "3px solid #FF9B33",
        borderRadius: 6
    }
  }
});

const CustomInput = ({
    placeHolder = "keyword"
}) => {
    const [inputValue, setInputValue] = useState("");
    const classes = useStyles();

    const handleChange = (value) => {
        setInputValue(value);
    };

    return (
        <OutlinedInput
          classes={{
            root: classes.outlinedInputRoot,
            focused: classes.outlinedInputfocused
          }}
          onChange={(event) => handleChange(event.target.value)}
          placeholder={placeHolder} />
    )
};

export default CustomInput;