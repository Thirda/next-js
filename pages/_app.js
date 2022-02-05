import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider appId="bAsNwPMRMYbKaabSGeaT1qJgV04pddhBKTYbCZz4" serverUrl="https://dyh7quy653rq.usemoralis.com:2053/server">
    <Component {...pageProps} />
  </MoralisProvider>
  )
}

export default MyApp;
