import "../styles/globals.css";
import { makeServer } from "../miragejs/server";
import type { AppProps } from "next/app";
import Providers from "../contexts/Providers";

if (process.env.NODE_ENV === "development") {
  // Mirage JS code will ever reach your production build.
  makeServer({ environment: "development" });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
