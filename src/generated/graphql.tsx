import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type IBook = {
   __typename: 'Book',
  id: Scalars['String'],
  title: Scalars['String'],
  author: IPerson,
  read: Scalars['Boolean'],
  open?: Maybe<Scalars['Boolean']>,
  content?: Maybe<IBookContent>,
};

export type IBookContent = {
   __typename: 'BookContent',
  heroes: Array<IPerson>,
  pages: Array<IPage>,
};

export type IMutation = {
   __typename: 'Mutation',
  bookRead?: Maybe<IBook>,
  bookOpen?: Maybe<IBook>,
};


export type IMutationBookReadArgs = {
  id: Scalars['String']
};


export type IMutationBookOpenArgs = {
  id: Scalars['String']
};

export type IPage = {
   __typename: 'Page',
  id: Scalars['String'],
  number: Scalars['Int'],
  content?: Maybe<IPageContent>,
};

export type IPageContent = {
   __typename: 'PageContent',
  heroes: Array<IPerson>,
};

export type IPerson = {
   __typename: 'Person',
  id: Scalars['String'],
  name: Scalars['String'],
};

export type IQuery = {
   __typename: 'Query',
  book?: Maybe<IBook>,
  books: Array<IBook>,
};


export type IQueryBookArgs = {
  id: Scalars['String']
};

export type IBookBasicFragment = { __typename: 'Book', id: string, title: string, open: Maybe<boolean>, read: boolean, author: { __typename: 'Person', id: string, name: string } };

export type IGetBooksQueryVariables = {};


export type IGetBooksQuery = { __typename: 'Query', books: Array<(
    { __typename: 'Book' }
    & IBookBasicFragment
  )> };

export type IGetBookQueryVariables = {
  id: Scalars['String']
};


export type IGetBookQuery = { __typename: 'Query', book: Maybe<(
    { __typename: 'Book' }
    & IBookBasicFragment
  )> };

export type IGetBookContentsQueryVariables = {
  id: Scalars['String']
};


export type IGetBookContentsQuery = { __typename: 'Query', book: Maybe<{ __typename: 'Book', id: string, content: Maybe<{ __typename: 'BookContent', pages: Array<{ __typename: 'Page', number: number, content: Maybe<{ __typename: 'PageContent', heroes: Array<{ __typename: 'Person', name: string }> }> }> }> }> };

export type IBookReadMutationVariables = {
  id: Scalars['String']
};


export type IBookReadMutation = { __typename: 'Mutation', bookRead: Maybe<{ __typename: 'Book', id: string, title: string, read: boolean }> };

export type IBookOpenMutationVariables = {
  id: Scalars['String']
};


export type IBookOpenMutation = { __typename: 'Mutation', bookOpen: Maybe<{ __typename: 'Book', id: string, open: Maybe<boolean> }> };



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Book: ResolverTypeWrapper<IBook>,
  Person: ResolverTypeWrapper<IPerson>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  BookContent: ResolverTypeWrapper<IBookContent>,
  Page: ResolverTypeWrapper<IPage>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  PageContent: ResolverTypeWrapper<IPageContent>,
  Mutation: ResolverTypeWrapper<{}>,
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Book: IBook,
  Person: IPerson,
  Boolean: Scalars['Boolean'],
  BookContent: IBookContent,
  Page: IPage,
  Int: Scalars['Int'],
  PageContent: IPageContent,
  Mutation: {},
};

export type IBookResolvers<ContextType = any, ParentType extends IResolversParentTypes['Book'] = IResolversParentTypes['Book']> = {
  id?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
  title?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
  author?: Resolver<IResolversTypes['Person'], ParentType, ContextType>,
  read?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>,
  open?: Resolver<Maybe<IResolversTypes['Boolean']>, ParentType, ContextType>,
  content?: Resolver<Maybe<IResolversTypes['BookContent']>, ParentType, ContextType>,
};

export type IBookContentResolvers<ContextType = any, ParentType extends IResolversParentTypes['BookContent'] = IResolversParentTypes['BookContent']> = {
  heroes?: Resolver<Array<IResolversTypes['Person']>, ParentType, ContextType>,
  pages?: Resolver<Array<IResolversTypes['Page']>, ParentType, ContextType>,
};

export type IMutationResolvers<ContextType = any, ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']> = {
  bookRead?: Resolver<Maybe<IResolversTypes['Book']>, ParentType, ContextType, RequireFields<IMutationBookReadArgs, 'id'>>,
  bookOpen?: Resolver<Maybe<IResolversTypes['Book']>, ParentType, ContextType, RequireFields<IMutationBookOpenArgs, 'id'>>,
};

export type IPageResolvers<ContextType = any, ParentType extends IResolversParentTypes['Page'] = IResolversParentTypes['Page']> = {
  id?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
  number?: Resolver<IResolversTypes['Int'], ParentType, ContextType>,
  content?: Resolver<Maybe<IResolversTypes['PageContent']>, ParentType, ContextType>,
};

export type IPageContentResolvers<ContextType = any, ParentType extends IResolversParentTypes['PageContent'] = IResolversParentTypes['PageContent']> = {
  heroes?: Resolver<Array<IResolversTypes['Person']>, ParentType, ContextType>,
};

export type IPersonResolvers<ContextType = any, ParentType extends IResolversParentTypes['Person'] = IResolversParentTypes['Person']> = {
  id?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
};

export type IQueryResolvers<ContextType = any, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = {
  book?: Resolver<Maybe<IResolversTypes['Book']>, ParentType, ContextType, RequireFields<IQueryBookArgs, 'id'>>,
  books?: Resolver<Array<IResolversTypes['Book']>, ParentType, ContextType>,
};

export type IResolvers<ContextType = any> = {
  Book?: IBookResolvers<ContextType>,
  BookContent?: IBookContentResolvers<ContextType>,
  Mutation?: IMutationResolvers<ContextType>,
  Page?: IPageResolvers<ContextType>,
  PageContent?: IPageContentResolvers<ContextType>,
  Person?: IPersonResolvers<ContextType>,
  Query?: IQueryResolvers<ContextType>,
};



export const BookBasicFragmentDoc = gql`
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
export const GetBooksDocument = gql`
    query getBooks {
  books @client {
    ...BookBasic
  }
}
    ${BookBasicFragmentDoc}`;
export type GetBooksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IGetBooksQuery, IGetBooksQueryVariables>, 'query'>;

    export const GetBooksComponent = (props: GetBooksComponentProps) => (
      <ApolloReactComponents.Query<IGetBooksQuery, IGetBooksQueryVariables> query={GetBooksDocument} {...props} />
    );
    
export type IGetBooksProps<TChildProps = {}> = ApolloReactHoc.DataProps<IGetBooksQuery, IGetBooksQueryVariables> | TChildProps;
export function withGetBooks<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IGetBooksQuery,
  IGetBooksQueryVariables,
  IGetBooksProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IGetBooksQuery, IGetBooksQueryVariables, IGetBooksProps<TChildProps>>(GetBooksDocument, {
      alias: 'getBooks',
      ...operationOptions
    });
};
export type GetBooksQueryResult = ApolloReactCommon.QueryResult<IGetBooksQuery, IGetBooksQueryVariables>;
export const GetBookDocument = gql`
    query getBook($id: String!) {
  book(id: $id) @client {
    ...BookBasic
  }
}
    ${BookBasicFragmentDoc}`;
export type GetBookComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IGetBookQuery, IGetBookQueryVariables>, 'query'> & ({ variables: IGetBookQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetBookComponent = (props: GetBookComponentProps) => (
      <ApolloReactComponents.Query<IGetBookQuery, IGetBookQueryVariables> query={GetBookDocument} {...props} />
    );
    
export type IGetBookProps<TChildProps = {}> = ApolloReactHoc.DataProps<IGetBookQuery, IGetBookQueryVariables> | TChildProps;
export function withGetBook<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IGetBookQuery,
  IGetBookQueryVariables,
  IGetBookProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IGetBookQuery, IGetBookQueryVariables, IGetBookProps<TChildProps>>(GetBookDocument, {
      alias: 'getBook',
      ...operationOptions
    });
};
export type GetBookQueryResult = ApolloReactCommon.QueryResult<IGetBookQuery, IGetBookQueryVariables>;
export const GetBookContentsDocument = gql`
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
export type GetBookContentsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IGetBookContentsQuery, IGetBookContentsQueryVariables>, 'query'> & ({ variables: IGetBookContentsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetBookContentsComponent = (props: GetBookContentsComponentProps) => (
      <ApolloReactComponents.Query<IGetBookContentsQuery, IGetBookContentsQueryVariables> query={GetBookContentsDocument} {...props} />
    );
    
export type IGetBookContentsProps<TChildProps = {}> = ApolloReactHoc.DataProps<IGetBookContentsQuery, IGetBookContentsQueryVariables> | TChildProps;
export function withGetBookContents<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IGetBookContentsQuery,
  IGetBookContentsQueryVariables,
  IGetBookContentsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IGetBookContentsQuery, IGetBookContentsQueryVariables, IGetBookContentsProps<TChildProps>>(GetBookContentsDocument, {
      alias: 'getBookContents',
      ...operationOptions
    });
};
export type GetBookContentsQueryResult = ApolloReactCommon.QueryResult<IGetBookContentsQuery, IGetBookContentsQueryVariables>;
export const BookReadDocument = gql`
    mutation BookRead($id: String!) {
  bookRead(id: $id) @client {
    id
    title
    read
  }
}
    `;
export type IBookReadMutationFn = ApolloReactCommon.MutationFunction<IBookReadMutation, IBookReadMutationVariables>;
export type BookReadComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<IBookReadMutation, IBookReadMutationVariables>, 'mutation'>;

    export const BookReadComponent = (props: BookReadComponentProps) => (
      <ApolloReactComponents.Mutation<IBookReadMutation, IBookReadMutationVariables> mutation={BookReadDocument} {...props} />
    );
    
export type IBookReadProps<TChildProps = {}> = ApolloReactHoc.MutateProps<IBookReadMutation, IBookReadMutationVariables> | TChildProps;
export function withBookRead<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IBookReadMutation,
  IBookReadMutationVariables,
  IBookReadProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, IBookReadMutation, IBookReadMutationVariables, IBookReadProps<TChildProps>>(BookReadDocument, {
      alias: 'bookRead',
      ...operationOptions
    });
};
export type BookReadMutationResult = ApolloReactCommon.MutationResult<IBookReadMutation>;
export type BookReadMutationOptions = ApolloReactCommon.BaseMutationOptions<IBookReadMutation, IBookReadMutationVariables>;
export const BookOpenDocument = gql`
    mutation bookOpen($id: String!) {
  bookOpen(id: $id) @client {
    id
    open
  }
}
    `;
export type IBookOpenMutationFn = ApolloReactCommon.MutationFunction<IBookOpenMutation, IBookOpenMutationVariables>;
export type BookOpenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<IBookOpenMutation, IBookOpenMutationVariables>, 'mutation'>;

    export const BookOpenComponent = (props: BookOpenComponentProps) => (
      <ApolloReactComponents.Mutation<IBookOpenMutation, IBookOpenMutationVariables> mutation={BookOpenDocument} {...props} />
    );
    
export type IBookOpenProps<TChildProps = {}> = ApolloReactHoc.MutateProps<IBookOpenMutation, IBookOpenMutationVariables> | TChildProps;
export function withBookOpen<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IBookOpenMutation,
  IBookOpenMutationVariables,
  IBookOpenProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, IBookOpenMutation, IBookOpenMutationVariables, IBookOpenProps<TChildProps>>(BookOpenDocument, {
      alias: 'bookOpen',
      ...operationOptions
    });
};
export type BookOpenMutationResult = ApolloReactCommon.MutationResult<IBookOpenMutation>;
export type BookOpenMutationOptions = ApolloReactCommon.BaseMutationOptions<IBookOpenMutation, IBookOpenMutationVariables>;