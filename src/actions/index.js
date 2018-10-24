export function selectBook(book) {
    //this is an ActionCreator, it needs to return an Action, an object with a type property
  console.log(`${book.title} was selected`)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

export function addBook(newBook) {
  console.log(newBook.title)
  console.log(newBook.pages)
  return {
    type: 'ADD_BOOK',
    title: newBook.title,
    pages: parseInt(newBook.pages)
  }
}