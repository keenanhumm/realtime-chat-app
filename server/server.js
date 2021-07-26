const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
  type Message {
    id: ID!
    user: String!
    content: String!
  }

  type Query {
    messages: [Messages!]
  }
`;

const resolvers = {
  Query: {
    messages: () => [],
  },
};

const server = new GraphQLServer({
  typeDefs,
});

server.start(({ port }) => {
  console.log(`server started on port ${port}`);
});
