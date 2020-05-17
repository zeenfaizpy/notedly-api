const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const dotenv = require('dotenv');
dotenv.config();

const models = require('./models');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const db = require('./db');

const app = express();
const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;
db.connect(DB_HOST);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { models };
  }
});
server.applyMiddleware({ app, path: '/api' });

// app.get('/', (req, res) => {
//   res.send('Hello world...');
// });

app.listen({ port }, () =>
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  )
);
