import React, {Component} from 'react'
import {connect} from 'react-redux'


class BookDetail extends Component {
  render() {
    if (!this.props.activeBook) {
      return <div>Select a book!</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <p>Title: {this.props.activeBook.title}</p>
        <p>Pages: {this.props.activeBook.pages}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)