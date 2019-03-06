import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import Like from './common/like';
class MoviesTable extends Component {
    columns = [
        {heading : "title",label:"Title"},
        {heading : "genre.name",label:"Genre"},
        {heading : "numberInStock",label:"Stock"},
        {heading : "dailyRentalRate",label:"Rate"},
        {key: "like",content: (movie)=>(<Like liked={movie.liked} onClick={()=>this.props.onLike(movie)}/>)},
        {key : "delete",content: (movie)=> (<button onClick={()=>this.props.onDelete(movie)} className="btn btn-danger">Delete</button>)}
    ]
   
    render() { 
        const{moviesPerPage,onDelete,onLike,onSort,sortColumn} = this.props;
        return (
    <table className="table">
    <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
    <TableBody data={moviesPerPage} columns={this.columns} onDelete={onDelete} onLike={onLike}/>
    </table>);
         
    }
}

export default MoviesTable;
 
