// apolloClient.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://api.hashnode.com',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});