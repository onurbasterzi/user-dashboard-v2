import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
  } from "@apollo/client";
  import { setContext } from "@apollo/client/link/context";

  const httpLink = createHttpLink({
    uri: "https://sunny-gorilla-88.hasura.app/v1/graphql",
  });
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token ="X4Hh7kQrymAVxjnw17S6e7n0PChHGbfhV2AgjqnL50aJG5u78zvcgr0no0cSCtbt";
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        "x-hasura-admin-secret": token,
      },
    };
  });
  
  export const Client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });