import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menucononent';
import {DISHES} from '../shared/dishes';
import {LEADERS} from '../shared/leaders';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';


import DishdetailComponent from './DishdetailComponent';
import Header from './headerComponent';
import Footer from './footerCompnent';
import Home from './homeComonent.js';
import Contact from './Contactscomponent';
import  About from './aboutuscomponent';
// for the react router
import {Switch, Route, Redirect} from 'react-router-dom';

//?acts like the container for the app

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state = { 
      dishes : DISHES,
      selectedDish:null,
      comments : COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,

    };
  }
  onDishSelect(dishId){
    //! here we cant type this.selectedDish = dish we must use setstate
   this.setState({selectedDish :dishId});

}
  render() {
    const HomePage = () =>{

      return(
        <Home dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        
        ></Home>
        
      )
    }
  
    const DishWithId = ({match}) => {
      return(
          <DishdetailComponent dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    return (
      <div >
       <Header></Header>
       <Switch>
          <Route path = '/home' component ={HomePage}/>
          //? how we specify a component with props using a function component
          //!attention to the spaces in the paths dont add extra ones
          //! use exact to not enter  to the dishId route just the menu one

          <Route   exact path= '/menu' component ={() => <Menu dishes = {this.state.dishes}/>}/>
          <Route  path = "/menu/:dishId" component={DishWithId}/>
          <Route  exact path = "/contactus" component= {Contact}/>
          <Route  exact path = "/aboutus" component= { ( ) => <About leaders = {this.state.leaders}/>}/>


          <Redirect to = '/home'/>
        </Switch>
           <Footer></Footer>

      </div>
    );
  }
}


export default Main;






