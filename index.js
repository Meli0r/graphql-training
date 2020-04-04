import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from "./schema";

const app = express();

app.get('/', (req, res) => {
    res.send('Viva GraphQL!');
});

class Friend {
    constructor(id, { firstName, lastName, gender, language, email }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
    }
}

const friendDatabase = {};

const root = { 
    friend: () => {
        return {
            "id": 16114984,
            "firstName": "Alexander",
            "lastName": "The Great",
            "gender": "Male",
            "language": "English",
            "email": "mymail@gmail.com",
        }
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Server is running on localhost:8080/graphql'));