import type { AppProps } from "next/app";
import reducer from "../context/reducer";
import { StateProvider } from "../context/stateProvider";
import { initialState } from "../context/intialState";
import Layout from "../components/Layout/layout";
import "../styles/globals.scss";
import { AuthUserProvider } from "../context/authUserContext";

function MyApp({ Component, pageProps }: AppProps) {
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
