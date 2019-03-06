import React from 'react';

const ListGroup = (props) => {
    const {items,onItemSelect,selectedItem} = props;
    console.log("selectedItem",selectedItem);

    return ( 
    
        <ul className="list-group">
        
            
        {items.map((item)=>(
            <li className={item === selectedItem ? "list-group-item active":"list-group-item"}
         key={item._id} onClick={()=>{onItemSelect(item)}}>
         {item.name}</li>
            ))}
        </ul>
   );
}
 
export default ListGroup;