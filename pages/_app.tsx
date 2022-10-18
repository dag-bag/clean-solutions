/** @format */

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <RecoilRoot>
        <Component {...pageProps} key={router.asPath} />
      </RecoilRoot>
    </AnimatePresence>
  );
}

export default MyApp;
3;
