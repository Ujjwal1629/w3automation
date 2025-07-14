import { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from 'graphql';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: () => users,
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve: (_, { id }) => users.find((u) => u.id === id),
    },
  },
});

const schema = new GraphQLSchema({ query: RootQuery });

export default schema; 