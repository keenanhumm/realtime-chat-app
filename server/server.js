const { GraphQLServer, PubSub } = require("graphql-yoga");

const messages = [];

const pubsub = new PubSub();

const subscribers = [];
const onMessageUpdate = (fn) => subscribers.push(fn);

const typeDefs = `
  type Message {
    id: ID!
    user: String!
    content: String!
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    postMessage(user: String!, content: String!): ID! 
  }

  type Subscription {
    messages: [Message!]
  }
`;

const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    postMessage: (_, { user, content }) => {
      const id = messages.length;
      messages.push({
        id,
        user,
        content,
      });
      subscribers.forEach((fn) => fn());

      return id;
    },
  },
  Subscription: {
    messages: {
      subscribe: (_, args, { pubsub }) => {
        const channel = Math.random().toString(36).slice(2, 15);
        onMessageUpdate(() => pubsub.publish(channel, { messages }));
        setTimeout(() => pubsub.publish(channel, { messages }), 0);

        return pubsub.asyncIterator(channel);
      },
    },
  },
};

const server = new GraphQLServer({
  resolvers,
  typeDefs,
  context: { pubsub },
});

server.start(({ port }) => {
  console.log(`server running @ http://localhost:${port}`);
});
