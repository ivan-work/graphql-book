const Person = [{
  name: 'J.K. Rowling'
}, {
  name: 'Michael Crichton'
}, {
  name: 'Harry Potter'
}, {
  name: 'Hermiona'
}, {
  name: 'Ron'
}, {
  name: 'Velocirator'
}, {
  name: 'T-Rex'
}].map((data, idx) => ({ __typename: 'Person', id: '' + idx, ...data }));


export default {
  books: [
    {
      __typename: 'Book',
      id: '1',
      title: 'Harry Potter and the Chamber of Secrets',
      author: Person[ 0 ],
      content: {
        __typename: 'BookContent',
        heroes: [Person[ 2 ], Person[ 3 ], Person[ 4 ]],
        pages: [{
          __typename: 'Page',
          id: '0',
          number: 0,
          content: { __typename: 'PageContent', heroes: [Person[ 2 ]] }
        }, {
          __typename: 'Page',
          id: '1',
          number: 1,
          content: { __typename: 'PageContent', heroes: [Person[ 3 ]] }
        }, {
          __typename: 'Page',
          id: '2',
          number: 2,
          content: { __typename: 'PageContent', heroes: [Person[ 4 ]] }
        }]
      },
      open: false,
      read: false
    }
    , {
      __typename: 'Book',
      id: '2',
      title: 'Jurassic Park',
      author: Person[ 1 ],
      content: {
        __typename: 'BookContent',
        heroes: [Person[ 5 ], Person[ 6 ]],
        pages: [{
          __typename: 'Page',
          id: '3',
          number: 0,
          content: { __typename: 'PageContent', heroes: [Person[ 5 ]] }
        }, {
          __typename: 'Page',
          id: '4',
          number: 1,
          content: { __typename: 'PageContent', heroes: [Person[ 6 ]] }
        }, {
          __typename: 'Page',
          id: '5',
          number: 2,
          content: { __typename: 'PageContent', heroes: [Person[ 5 ]] }
        }]
      },
      open: false,
      read: true
    }
  ]
}