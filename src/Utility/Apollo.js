import { ApolloClient, InMemoryCache  } from  '@apollo/client';

export default new ApolloClient({
        uri: "http://localhost:5000", 
        cache: new InMemoryCache(), 
}); 