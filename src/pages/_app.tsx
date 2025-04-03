import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/assets/logo-icon.svg" sizes="32x32" />
        <title>Ambitio Assignment</title>
      </Head>
      <Component {...pageProps} />
  </>)
}
