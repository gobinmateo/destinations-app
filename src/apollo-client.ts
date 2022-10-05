import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-eu-west-2.hygraph.com/v2/cl8jvwit311tq01tchkashdq4/master",
    cache: new InMemoryCache(),
});

export default client;