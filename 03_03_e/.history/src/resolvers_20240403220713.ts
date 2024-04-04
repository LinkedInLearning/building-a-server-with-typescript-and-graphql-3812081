
const users: {id: string; name: string, email: string, role: string}[] = [
  { id: '1', name: 'John Doe', email: 'john.doe@example.com', role: 'admin' },
  { id: '2', name: 'Jane Doe', email: 'jane.doe@example.com', role: 'user' },
];

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
  Mutation: {
    addUser: (_: any, args: any) => {
      const id = String(users.length + 1);
      const user = { id: id, name: args.name, email: args.email, role: args.role};
      users.push(user);
      return user;
    },
  },
};

export default resolvers;