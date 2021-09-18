import React, {Component} from 'react';
import {Card,CardImg, CardImgOverlay,CardText, CardBody, CardTitle} from 'reactstrap';




class DishdetailComponent extends Component{
    constructor(props){
        super(props);
      
    }

    

    renderComment(comments)
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
     
    }
    render() {
      
        if (this.props.dish != null)
        {
     
          return (
            <div className="container">
            <div className="row">
          <div className="col-12 col-md-5 m-1" >
        <Card >
          <CardImg width = '100%' object src = {this.props.dish.image} alt = {this.props.dish.name}/>
          <CardBody>
          <CardTitle>{this.props.dish.name}</CardTitle>
          <CardText>
              {this.props.dish.description}
          </CardText>
          </CardBody>
      </Card>
      </div>
      <div className="col-12 col-md-5 m-1" >
        
        {this.renderComment(this.props.dish.Comments)}
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
}

    export default DishdetailComponent;
    





