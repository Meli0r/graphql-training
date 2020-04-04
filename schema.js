import { buildSchema } from 'graphql';

const schema = buildSchema(`

    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [Contact]
    }

    type Contact {
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
    }

    type Query{
        getFriend(id: ID): Friend
    }

    input ContactInput {
        firstName: String
        lastName: String
    }

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [ContactInput]
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`);

export default schema;