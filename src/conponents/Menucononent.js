import React from 'react';
import {Card,CardImg, BreadcrumbItem, Breadcrumb, CardImgOverlay, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';



   
 function RenderMenuItem({dish})
 {
     return(
        <Card >
            <Link to ={`/menu/${dish.id} `}>
                          
        <CardImg width = '100%' object src = {dish.image} alt = {dish.name}/>
    <CardImgOverlay
        body className="ml-5">
            <CardTitle>{dish.name}</CardTitle>
    </CardImgOverlay>
    </Link>


</Card>

     );
     
 }
 // second way of defining  the functional component
  const Menu = (props) =>{
    const menu = props.dishes.map( (dish) => {
        return (
            <div className= "col-12  col-md-5 m-1">
                <RenderMenuItem dish = {dish} ></RenderMenuItem>
             
            </div>

        

        );
    }); 
  return(
    <div className= "container">
        <div className = "row ">
            <Breadcrumb >
               <BreadcrumbItem>
               <Link to ='/home'>Home </Link>
               </BreadcrumbItem>
               <BreadcrumbItem active>Menu
               </BreadcrumbItem>
            </Breadcrumb>
                 <div className = "col-12">
                     <h3>Menu</h3>
                     <hr/>

                 </div>

        </div>
        <div className="row">
             {menu}
        </div>
      

      
    </div>
  )
      
  }
   
  

//! always add it for a component
export default Menu;

//? the lifecycle of this exemple is :
// menu component constructor invoked
// menu component render  invoked
// dish detail component render  invoked
// menu component componenetDidmount  invoked
//  dish detail component componenetDidmount  invoked
//  dish detail component componenetDidupdate  invoked
//   menu component render  invoked
//    dish detail component render  invoked
//    dish detail component componenetDidupdate  invoked
   //? the component_did_mount don't be invoked unless the other components in the retern are called
//    componentDidMount()
//    {
//        console.log("menu component componenetDidmount  invoked");

//    }

//    componentDidUpdate()
//    {
//        console.log("dish detail component componenetDidupdate  invoked");

//    }