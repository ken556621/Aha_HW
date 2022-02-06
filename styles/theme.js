import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 375,
            md: 1280,
            lg: 1440,
            xl: 1980
        }
    },
    typography: {
        fontFamily: "Ubuntu",
        h1: {
            fontSize: 30,
            fontWeight: "bold",
            lineHeight: "150%",
            letterSpacing: "0.25px",
            color: "#fff"
        },
        h2: {
            fontSize: 24,
            fontWeight: 500,
            color: "#fff"
        },
        h3: {
            fontSize: 14,
            fontWeight: "bold",
            color: "#fff"
        }
    }
});

export default theme;