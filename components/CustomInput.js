import OutlinedInput from "@mui/material/OutlinedInput";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles({
  outlinedInputRoot: {
    color: "#fff",
    "& input": {
        border: "3px solid rgba(255, 255, 255, 0.5)",
        borderRadius: 6,
        padding: 10
    }
  },
  outlinedInputfocused: {
    "& input": {
        border: "3px solid #FF9B33"
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
          value={inputValue}
          onChange={(event) => handleChange(event.target.value)}
          placeholder={placeHolder} />
    )
};

export default CustomInput;