
import './index.css';

import React, {useState} from 'react';
import { CSSTransition} from 'react-transition-group';

function App() {
  return (
    <Navbar>
      <NavItem icon="😀"/>
      <NavItem icon="🦄"/>
      <NavItem icon="🍅"/>
      <NavItem icon="😅">
        <DropdownMenu/>
      </NavItem>

    </Navbar>
  );
}
function Navbar(props){
  return(
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children } 
      </ul>
    </nav>
  )
}

function NavItem(props){

  const[open, setOpen]= useState(false);
  return(
    <li className="nav-item">
    <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
    {props.icon}
    </a>
    {open && props.children}
    </li>
);
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main'); 
  const [menuHeight, setMenuHeight] = useState(null);
  
  

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return(
  <div className="dropdown" style={{ height: menuHeight }} >

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem leftIcon={'🙎🏻‍♀️'}>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={'🍤'}
            rightIcon={'🐝'}
            goToMenu="settings">
            Food
          </DropdownItem>
          <DropdownItem
            leftIcon="🍩"
            rightIcon={'🐝'}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={'⬅️'}>
            <h2>Food</h2>
          </DropdownItem>
          <DropdownItem leftIcon={'🍔'}>Hamburger</DropdownItem>
          <DropdownItem leftIcon={'🍟'}>French fries</DropdownItem>
          <DropdownItem leftIcon={'🍕'}>Pizza</DropdownItem>
          <DropdownItem leftIcon={'🍝'}>Spagatti!</DropdownItem>
        </div>
      </CSSTransition>


      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={'⬅️'}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
export default App;
