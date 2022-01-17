import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;
