import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menucononent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './headerComponent';
import Footer from './footerCompnent';
import Home from './homeComonent.js';
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
    };
  }
  onDishSelect(dishId){
    //! here we cant type this.selectedDish = dish we must use setstate
   this.setState({selectedDish :dishId});

}
  render() {
    const Homepage = () =>{

      return(
        <Home></Home>
      )
    }
    return (
      <div >
       <Header></Header>
       <Switch>
          <Route path = "/home" component ={Homepage}></Route>
          <Route exact path= "/menu " component ={()=><Menu dishes = {this.state.dishes}></Menu>}></Route>
          <Redirect to = "/home"></Redirect>
         </Switch>
           <Footer></Footer>

      </div>
    );
  }
}

export default Main;






