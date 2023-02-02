/** @format */
import "../styles/globals.css";
import "../styles/styles.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
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
