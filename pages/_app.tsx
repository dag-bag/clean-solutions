/** @format */
import "../styles/globals.css";
import "../styles/styles.css";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <RecoilRoot>
      <Component
        {...pageProps}
        key={router.asPath}
      />
    </RecoilRoot>
  );
}

export default MyApp;
