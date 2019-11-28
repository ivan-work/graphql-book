import gql from "graphql-tag";

export default gql`
    type Person {
        id: String!
        name: String!
    }
    
    type Page {
        id: String!
        number: Int!
        content: PageContent
    }
    
    type PageContent {
        heroes: [Person!]!
    }
    
    type BookContent {
        heroes: [Person!]!
        pages: [Page!]!
    }

    type Book {
        id: String!
        title: String!
        author: Person!
        read: Boolean!
        open: Boolean
        content: BookContent
    }

    type Query {
        book(id: String!): Book
        books: [Book!]!
    }

    type Mutation {
        bookRead(id: String!): Book
        bookOpen(id: String!): Book
    }
`;