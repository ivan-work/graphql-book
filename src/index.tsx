import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-common';
import { OperationOption, withApollo, WithApolloClient } from '@apollo/react-hoc';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import schema from '../schema.graphql';

import { BOOK_OPEN, BOOK_READ, GET_BOOK, GET_BOOKS } from './a.gql';

import {
  IBook,
  GetBookComponent,
  GetBooksComponent,
  withBookOpen,
  BookOpenMutationOptions,
  IBookOpenMutationVariables, BookOpenMutationResult, IPerson, GetBookContentsDocument, GetBookContentsComponent
} from "./generated/graphql";

import data from './data';
import { useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { bookOpen } from "*/a.gql.js";
import { LogQuery } from "./components/Logging";

const resolvers = {
  Query: {
    book: (_, { id }, { cache }) => {
      let { books } = cache.read({ query: GET_BOOKS });

      console.log('resolving book');

      return books.find(book => book.id === id);
    }
  },
  Mutation: {
    bookOpen: (obj, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: 'Book', id: variables.id });
      const fragment = gql`
          fragment isOpen on Book {
              open
          }
      `;
      let book = cache.readFragment({ fragment, id });
      const data = { ...book, open: !book.open };
      cache.writeData({ id, data });
    }
    // bookRead: (_, { id }, { cache }) => {
    //   let { books } = cache.read({ query: GET_BOOKS });
    //   books = books.map(book => {
    //     book.read = book.id === id ? !book.read : book.read;
    //     return book;
    //   });
    //   cache.writeData({
    //     data: {
    //       books
    //     },
    //   });
    // }
  }
};

const cache = new InMemoryCache();

// create http link
const link = new HttpLink({
  uri: 'https://example.com/graphql'
});

const apolloClient = new ApolloClient({
  link,
  cache,
  typeDefs: schema,
  resolvers
});

cache.writeData({
  data,
});

const App = () => {
  return <div>
    <GetBooksComponent>
      {LogQuery(({ data }) => <pre>{JSON.stringify(data)}</pre>)}
    </GetBooksComponent>
    {/*<LogQueryJSX>*/}
    <GetBookComponent variables={{ id: '1' }}>
      {LogQuery(({ data }) => data ? <OpenableBook book={data.book} /> : null)}
    </GetBookComponent>
    <GetBookComponent variables={{ id: '2' }}>
      {LogQuery(({ data }) => data ? <OpenableBook book={data.book} /> : null)}
    </GetBookComponent>
    {/*</LogQueryJSX>*/}
  </div>
};

const PersonOutput = (props: { person: IPerson }) => (<em>{props.person.name}</em>);
const NameOutput = (props: { person: Pick<IPerson, 'name'> }) => (<em>{props.person.name}</em>);

const SimpleBook = (props: { book: IBook }) => (
  <div>
    {props.book.title} by
    <PersonOutput person={props.book.author} />
  </div>
);

type OpenableBookProps = { book: IBook };

class OpenableBook extends React.Component<OpenableBookProps, any> {
  open = () => {
    // #TODO withApollo is broken
    const client = apolloClient;
    client.mutate<BookOpenMutationResult, IBookOpenMutationVariables>({
      mutation: BOOK_OPEN,
      variables: { id: this.props.book.id }
    })
  };

  render() {
    const { book } = this.props;

    return <div>
      <span>{book.title} by {book.author.name}</span>
      <a href='#' onClick={this.open}>open</a>
      {book.open && <div>
        <div>Book contents:</div>
        <GetBookContentsComponent variables={{ id: book.id }}>
          {({ data }) => !data ? null : (<div>
            {data.book.content.pages.map(page => (
              <div key={page.number /* try to set page.id */}>Heroes at Page #{page.number}: {page.content.heroes.map(hero => (
                // <PersonOutput person={hero}/> Error, since there's no page.content.heroes.id in query!
                <NameOutput key={hero.name} person={hero} />
              ))}</div>
            ))}
          </div>)}
        </GetBookContentsComponent>
      </div>}
    </div>
  }
}

render(
  <ApolloProvider client={apolloClient}>
    <App></App>
  </ApolloProvider>,
  document.getElementById('root')
)