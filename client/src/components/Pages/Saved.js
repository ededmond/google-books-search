import React from "react";
import API from "../../utils/API";

import BookEntry from "../bookEntry";

class Search extends React.Component {
    state= {
        books: [],
        error: ""
    }
    componentDidMount = ()=>{
        API.getSavedBooks().then(response => {
            this.setState({
                books: response.data
            })
        }).catch(error => {
            console.log(error);
        })
    }
    render () {
        return (
            <div>
                <h1>Saved Books</h1>
            <div className="row results">
                <div className = "col-12 ">
                    {this.state.books.map((book,i) => {
                        const {link,authors,description,image,title,_id} = book;
                        return (<BookEntry 
                            key = {_id}
                            id = {_id}
                            link = {link}
                            authors = {authors}
                            description = {description}
                            image = {image}
                            title = {title}
                            savePage = {true}
                        />)
                    })}
                </div>
            </div>
            </div>
        )
    }

}

export default Search;