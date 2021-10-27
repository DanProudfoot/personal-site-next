import { AnimatePresence } from "framer-motion";
import "sanitize.css";

import GlobalStyle from "styles/GlobalStyle";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}
