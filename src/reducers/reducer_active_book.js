
//This state parameter is not the application state, it's the state this reducer is responsbible for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }

  return state
}