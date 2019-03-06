import React, { Component } from 'react';
import _ from 'lodash';

//Components - like
//props - moviesPerPage,onDelete,onClick
//make moviesPerPage reusable
class TableBody extends Component {
    renderCell = (item,column) => {
        if(column.content) return column.content(item)
        return(_.get(item,column.heading))
    }
    createKey = (item,column) => {
        return(item._id + (column.heading || column.key))
    }
    render() { 
        const {data,columns} = this.props;
    return ( 
        <tbody>
        {data.map((item)=>(
            <tr key={item._id}>
             {columns.map((column,idx)=>(
                 <td key={this.createKey(item,column)}>{this.renderCell(item,column)}</td>

             ))}
               
            </tr>
        ))}
        {/* {moviesPerPage.map((movie) => (
        <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td><Like liked={movie.liked} onClick={()=>onLike(movie)}/></td>
        <td><button onClick={()=>onDelete(movie)} className="btn btn-danger">Delete</button></td>
        </tr>
        ))} */}
        </tbody>
        );
    }
}
 
export default TableBody;