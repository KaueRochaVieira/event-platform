import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient(
  {
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ogqubt01h301xnhfkz7k3w/master',
    cache: new InMemoryCache()
  }
)