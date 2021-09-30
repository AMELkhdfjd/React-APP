import React from 'react';
import {Card,CardImg,CardText,  Breadcrumb,BreadcrumbItem, CardBody, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';

//? use the capital when defining functions
  

   function RenderDish ({dish}){
       return(
                <Card>
                    <CardImg  top src = {dish.image} alt ={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText> {dish.description}</CardText>

                    </CardBody>
                </Card>

       )
   }


    function RenderComments({comments})
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
    //! attention when u have to pass the props as argument dont put it inside {}

   function DishdetailComponent(props)
   {

   

      
    if (props.dish != null)
        {
     
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
               
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
              
            );
        }
        else{
            return (
                <div></div>
            )
        }
  
        }


    export default DishdetailComponent;


