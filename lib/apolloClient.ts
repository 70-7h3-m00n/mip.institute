import { routes } from '@/config/index';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `${routes.back.root}${routes.back.graphql}`,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first' // Использовать кеш в первую очередь
    },
    query: {
      fetchPolicy: 'cache-first'
    }
  },
  connectToDevTools: false
})

export default client
