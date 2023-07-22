const dotenv = require('dotenv');
dotenv.config()

const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

// const MONGODB = "mongodb+srv://samuel:silentwords@graphql.2szucxi.mongodb.net/graphql?retryWrites=true&w=majority";

/*Apollo Server requires two different parameters to run the server:
typeDefs: GraphQL Type Definition.
resolvers: How do we resolve queries / mutations?*/

const typeDefs = require('./graphql/typeDefs.js');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(process.env.MONGODB, {useNewUrlParser: true})
.then(() => {
    console.log("Mongodb Connection Successful");
    return server.listen({ port: 5000 });
})
    .then((res) => {
    console.log(`Server running at ${res.url}`)
})