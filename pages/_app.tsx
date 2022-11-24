import type { AppProps } from "next/app";
import reducer from "../context/reducer";
import { StateProvider } from "../context/stateProvider";
import { initialState } from "../context/intialState";
import Layout from "../components/Layout/layout";
import "../styles/globals.scss";
import { AuthUserProvider } from "../context/authUserContext";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import Router from "next/router";
import { useState } from "react";
import "../styles/nprogress.css";
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const handleStart = (url: any) => {
    url !== Router.asPath && NProgress.start();
    setLoading(true);
  };

  const handleComplete = (url: any) => {
    url === Router.asPath && NProgress.done();
    setLoading(false);
  };
  Router.events.on("routeChangeStart", handleStart);
  Router.events.on("routeChangeComplete", handleComplete);
  return (
    <AuthUserProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateProvider>
    </AuthUserProvider>
  );
}
export default MyApp;
