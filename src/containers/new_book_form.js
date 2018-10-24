import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addBook} from '../actions/index'


class NewBook extends Component {
  constructor(props){
    super(props)
    this.titleRef = React.createRef()
    this.pagesRef = React.createRef()
  }

  render() {
    return (
      <form>
        <label htmlFor="bookTitle">Submit a new book:</label>
        <input ref={this.titleRef} id="newBook" type="text" /><br />
        <label htmlFor="bookPages">Number of Pages:</label>
        <input ref={this.pagesRef} id="bookPages" type="number" /> <br />
        <button onClick={() => this.props.addBook({title: this.titleRef.current.value, pages: this.pagesRef.current.value})}> Add New Book </button>
      </form>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({addBook: addBook}, dispatch)
}

export default connect(null, mapDispatchToProps)(NewBook)