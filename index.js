import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from "./schema";
import resolvers from './resolvers';

const app = express();

app.get('/', (req, res) => {
    res.send('Viva GraphQL!');
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Server is running on localhost:8080/graphql'));