// import React, {Component} from 'react';
// import {Card,CardImg, CardImgOverlay,CardText, CardBody, CardTitle} from 'reactstrap';




// class DishdetailComponent extends Component{
//     componentDidMount()
//     {
//         console.log("dish detail component componenetDidmount  invoked");

//     }
//     componentDidUpdate()
//     {
//         console.log("dish detail component componenetDidupdate  invoked");

//     }

    

//     renderComment(comments)
//     {
      
       
      
//         const list_comment = comments.map( comment => {
//                 return (
//                     <ul class="list-unstyled">
//                     <li  key={comment.id}>{comment.content}</li>
//                     <li>{comment.author}</li>
//                 </ul>
//                 );
//             });
//             return(
//             <div>
//                 <h4>Comments</h4>
//                {list_comment}
             
//             </div>
//             )
     
//     }
//     render() {
//         console.log("dish detail component render  invoked");

      
//         if (this.props.dish != null)
//         {
     
//           return (
//             <div className="container">
//             <div className="row">
//           <div className="col-12 col-md-5 m-1" >
//         <Card >
//           <CardImg width = '100%' object src = {this.props.dish.image} alt = {this.props.dish.name}/>
//           <CardBody>
//           <CardTitle>{this.props.dish.name}</CardTitle>
//           <CardText>
//               {this.props.dish.description}
//           </CardText>
//           </CardBody>
//       </Card>
//       </div>
//       <div className="col-12 col-md-5 m-1" >
        
//         {this.renderComment(this.props.dish.Comments)}
//       </div>

//       </div>

//       </div>
//           )
//         }
//         else{
//             return (
//                 <div></div>
//             )
//         }
  
//         }
// }

//     export default DishdetailComponent;
    








import React from 'react';
import {Card,CardImg,CardText, CardBody, CardTitle} from 'reactstrap';

//? use the capital when defining functions


   
   

    

    function RenderComment({comments})
    {
      
       
      
        const list_comment = comments.map( comment => {
                return (
                    <ul class="list-unstyled">
                    <li  key={comment.id}>{comment.content}</li>
                    <li>{comment.author}</li>
                </ul>
                );
            });
            return(
            <div>
                <h4>Comments</h4>
               {list_comment}
             
            </div>
            )
     
    };

   function DishdetailComponent({dish})
   {

   

      
        if (dish != null)
        {
     
          return (
            <div className="container">
            <div className="row">
          <div className="col-12 col-md-5 m-1" >
        <Card >
          <CardImg width = '100%' object src = {dish.image} alt = {dish.name}/>
          <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>
              {dish.description}
          </CardText>
          </CardBody>
      </Card>
      </div>
      <div className="col-12 col-md-5 m-1" >
          <RenderComment comments = {dish.Comments}></RenderComment>
        
      </div>

      </div>

      </div>
          )
        }
        else{
            return (
                <div></div>
            )
        }
  
        }


    export default DishdetailComponent;


