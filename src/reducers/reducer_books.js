const initialBooks = [
    {title: "Harry Potter", pages: 10},
    {title: "Little Mermaid", pages: 15},
    {title: "Da Vinci Code", pages: 20},
    {title: "Lord of the Rings", pages: 30},
    {title: "Mockingjay", pages: 35}
  ]


export default function(state=initialBooks, action) {
  switch(action.type) {
    case 'ADD_BOOK':
    console.log('adding book')
      return [
        ...state,
        {
          title: action.title,
          pages: action.pages
        }
      ]
    default:
      return state
  }

}
