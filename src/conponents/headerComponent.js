import React, {Component} from 'react';
import { Navbar, NavbarBrand , Collapse,NavItem , Nav,NavbarToggler, Jumbotron} from 'reactstrap';
// import {NavLink} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  constructor (props){
    super(props);
    this.state= {
      isNavOpen: false
    }
    //! to specify that the toggle nav will be accessible using this.togglenav
    this.toggleNav= this.toggleNav.bind(this);
  }

  
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  
  render(){
      return (
          <React.Fragment>
            <Navbar dark expand = "md" >
          <div className="container">
            <NavbarToggler  onClick = {this.toggleNav}/>
            <NavbarBrand  className ="mr-auto" href="/"> 
            <img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
            </NavbarBrand>

             <Collapse isOpen = {this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink   className = "nav-link" to = "/home">
                      <span className = "fa fa-home fa-lg">Home</span>
                    </NavLink>
                    </NavItem>

                    <NavItem>
                    <NavLink   className = "nav-link" to = "/aboutus">
                      <span className = "fa fa-info fa-lg">About us</span>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink   className = "nav-link" to = "/menu">
                      <span className = "fa fa-list fa-lg">Menu</span>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink   className = "nav-link" to = "/contactus">
                      <span className = "fa fa-address-card fa-lg">Contact Us</span>
                    </NavLink>
                  </NavItem>


                </Nav>
                </Collapse>
          </div>
        </Navbar>
        <jumbotron>
        <div className="container">
            <div className="row row-header">
                <div className=" col-12 col-sm-6">
                  <h1>Ristorante Con Fusion</h1>
                  <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
            </div>
        </div>


        </jumbotron>
          
          </React.Fragment>
      )
  }
}
export default Header;