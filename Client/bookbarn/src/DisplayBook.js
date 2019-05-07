import React, {Component} from 'react';


export class DisplayBook extends Component {

    render() {

        let books = this.props.books;
        let displayBooks = books.map((book) => 
        {
            return <li>{book}</li>
        })
        return( 
            <ul>{displayBooks}</ul>
        )
      
  

      
    }
      }

