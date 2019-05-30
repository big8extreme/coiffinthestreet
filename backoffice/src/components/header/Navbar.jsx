import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './navbar.css';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className='nav-link'>
        <Navbar className="bg-info" light expand="md">
          <NavbarBrand className='nav-link' href="/">WCS Synthèse</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
    <NavItem>
              <NavLink className='nav-link' to="/"> Home </NavLink> 
              </NavItem>


              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className='nav-link' nav caret>

             
              DOCUMENTATION API
                </DropdownToggle>
                <DropdownMenu >
                <DropdownItem>
                  <NavLink className='nav-link' to="/api"> Connexion </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/"> Données</NavLink>
                  </DropdownItem>
               </DropdownMenu>
              </UncontrolledDropdown>


            


              <NavItem>
        <NavLink className='nav-link' to="/contact"> Contact </NavLink>
              </NavItem>


            </Nav>
          </Collapse>
        </Navbar>
















      </div>
    );
  }
}