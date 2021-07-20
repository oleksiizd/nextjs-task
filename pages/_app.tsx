import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../themes/theme";
import { IAppProps } from "../types/types";
import { Provider } from "react-redux";
import { useInitializedStore } from "../redux/hooks/useInitializedStore";

export default function MyApp({ Component, pageProps }: IAppProps) {
  const reduxStore = useInitializedStore(pageProps.initialReduxState);
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}
