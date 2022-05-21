import "../styles/globals.css";
import { makeServer } from "../miragejs/server";
import type { AppProps } from "next/app";

if (process.env.NODE_ENV === "development") {
  // Mirage JS code will ever reach your production build.
  makeServer({ environment: "development" });
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
