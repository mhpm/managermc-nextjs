import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "../global/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={LightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
