import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { Client } from "./api/credentials";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={Client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
