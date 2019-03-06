import React, { Component } from 'react';

class TableHeader extends Component {
    raiseSort =(column)=>{
    
        //sortColumn : {column:"title",order:"asc"}
        console.log("clicked",column);
        const sortColumn = {...this.props.sortColumn};
        if(column === sortColumn.column) {
         sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        } else {
         sortColumn.order = 'asc';
         sortColumn.column = column;
        }
          
        console.log("sortColumn",sortColumn)
        this.props.onSort(sortColumn);
        
        
      }

      renderSortIcon = (column) => {
        if(column.heading !== this.props.sortColumn.column){
          return null;
        }
        if(this.props.sortColumn.order === 'asc'){
          return(<i className="fa fa-sort-asc" aria-hidden="true"></i>)
        }
        return(<i className="fa fa-sort-desc" aria-hidden="true"></i>)


      }


    
    render() { 
        console.log("th",this.props.columns);
        return (
    <thead>
      
        <tr>
        {this.props.columns.map((column)=> (
          <th key={column.label || column.key} onClick={()=>{this.raiseSort(column.heading)}}>{column.label} {this.renderSortIcon(column)}</th>
          ))}
        </tr>
        
      
    </thead>
          );
    }
}
 
export default TableHeader;