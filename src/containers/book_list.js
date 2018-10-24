import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'

class BookList extends Component {
  renderList() {
    //this is coming from mapStateToProps
    return this.props.booksCollection.map((book) => {
      return (
        <li
          onClick={ () => this.props.selectBook(book)} 
          key={book.title} 
          className="list-group-item">{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned here will show up as props inside booklist
  //this object below is equal to this.props. The state is the global state created by redux.
  return {
    booksCollection: state.books //this was set by combineReducers in index reducer
  }
}

function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all the reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)