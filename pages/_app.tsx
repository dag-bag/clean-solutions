/** @format */
import "../styles/globals.css";
import "../styles/styles.css";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";

// import { Poppins } from '@next/font/google'


// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   variable: '--font-inter',
// })

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <main>
      <RecoilRoot>
        <Component
          {...pageProps}
          key={router.asPath}
        />
      </RecoilRoot>
    </main>
  );
}

export default MyApp;
