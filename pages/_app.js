import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { Client } from "./api/credentials";
import Layout from "../components/layout/layout";
import Head from 'next/head'
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
    <Head>
      <title>User List Demo V2</title>
      <meta name='keywords' content='users, list, 90Pixel React Code Challange'/>
    </Head>
    <ApolloProvider client={Client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
    </Fragment>
  );
}

export default MyApp;
