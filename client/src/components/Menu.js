import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Menu extends Component {
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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Librenet</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Статьи</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">О проекте</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Тематика
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Разработка
                  </DropdownItem>
                  <DropdownItem>
                    Системное администрирование
                  </DropdownItem>
                  <DropdownItem>
                    Информационная безопасность
                  </DropdownItem>
                  <DropdownItem>
                    Linux
                  </DropdownItem>
                  <DropdownItem>
                    BSD
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Прочее
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;