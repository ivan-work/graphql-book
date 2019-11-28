import gql from "graphql-tag";

export const BookBasicFragment = gql`
    fragment BookBasic on Book {
        id
        title
        open
        read
        author {
            id
            name
        }
    }
`;

export const GET_BOOKS = gql`
    query getBooks {
        books @client {
            ...BookBasic
        }
    }

    ${BookBasicFragment}
`;

export const GET_BOOK = gql`
    query getBook($id: String!) {
        book(id: $id) @client {
            ...BookBasic
        }
    }

    ${BookBasicFragment}
`;

export const GET_BOOK_CONTENTS = gql`
    query getBookContents($id: String!) {
        book(id: $id) @client {
            id
            content {
                pages {
                    number
                    content {
                        heroes {
                            name
                        }
                    }
                }
            }
        }
    }
`;

export const BOOK_READ = gql`
    mutation BookRead($id: String!) {
        bookRead(id: $id) @client {
            id
            title
            read
        }
    }
`;

export const BOOK_OPEN = gql`
    mutation bookOpen($id: String!) {
        bookOpen(id: $id) @client {
            id
            open
        }
    }
`;