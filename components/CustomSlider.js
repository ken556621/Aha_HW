import Slider, { SliderThumb } from "@mui/material/Slider";

import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles({
    rail: {
        color: "#1B1B1B"
    },
    track: {
        background: "linear-gradient(90deg, #FF5C01 0%, #FFD25F 93.79%)",
    },
    thumbColorPrimary: {
        color: "red"
    }
});

const CustomSlider = ({
    min = 0,
    max = 100,
    step = 10
}) => {
  const classes = useStyles();

  const valueText = (value) => {
    return `${value}`;
  };

  const ThumbComponent = (props) => {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }

  return (
    <Slider
      classes={{
        rail: classes.rail,
        track: classes.track,
        thumbColorPrimary: classes.thumbColorPrimary
      }}
      aria-label="Temperature"
      defaultValue={5}
      getAriaValueText={valueText}
      valueLabelDisplay="auto"
      step={step}
      min={min}
      max={max}
      components={{ Thumb: ThumbComponent }}
    />
  );
};

export default CustomSlider;
