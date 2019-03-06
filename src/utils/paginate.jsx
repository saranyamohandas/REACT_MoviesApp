import _ from 'lodash';


const Paginate = (items,pageNumber,pageSize) => {
    // console.log("slice",_.slice([1,2,3],1,2));
    // console.log("take",_.take([5,6,7,8],1))
    // console.log("my app") ;
    const startIdx = (pageNumber-1) * pageSize;
    return _(items).slice(startIdx).take(pageSize).value();
    
   
}
 
export default Paginate;


