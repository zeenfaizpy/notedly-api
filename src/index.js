const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();
const port = process.env.PORT || 4000;

let notes = [
  { id: '1', content: 'This is a note', author: 'Faizal' },
  { id: '2', content: 'This is another note', author: 'Yasir' },
  { id: '3', content: 'Oh hey look, another note!', author: 'Imran' }
];

const typeDefs = gql`
  type Note {
    id: ID!
    content: String!
    author: String!
  }

  type Query {
    hello: String!
    notes: [Note!]!
    note(id: ID!): Note!
  }

  type Mutation {
    newNote(content: String!): Note!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello World!';
    },
    notes: () => {
      return notes;
    },
    note: (parent, args) => {
      return notes.find(note => note.id == args.id);
    }
  },
  Mutation: {
    newNote: (parent, args) => {
      let note = {
        id: String(notes.length) + 1,
        content: args.content,
        author: 'Bilal'
      };
      notes.push(note);
      return note;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/api' });

// app.get('/', (req, res) => {
//   res.send('Hello world...');
// });

app.listen({ port }, () =>
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  )
);
