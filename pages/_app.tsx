import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

import defaultSEOConfig from "../next-seo.config";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  gray: {
    500: "#666666",
  },
  brand: {
    500: "#0070f3",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
