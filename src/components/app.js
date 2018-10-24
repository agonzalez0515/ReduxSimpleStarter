import React, { Component } from 'react';
import BookList from '../containers/book_list'
import BookDetail from '../containers/book_detail'
import NewBook from '../containers/new_book_form'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
        <NewBook />
      </div>
    );
  }
}
