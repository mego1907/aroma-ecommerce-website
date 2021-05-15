import React, {useState, useEffect} from 'react';
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavSearch,
  SearchBtn,
  SearchIcon,
  Log,
  SignIn,
  SignInIcon,
  SignInDesc,
  SignUp,
  SignUpIcon,
  SignUpDesc,
  ShoppingCartBtn,
  ShoppingCartIcon,
  ShoppingCount,
  MenuWrapper,
} from "./Navbar.elements";
import logo from '../../assets/images/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import {IconContext} from 'react-icons'

import {useSelector} from 'react-redux'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const cart = useSelector(state => state.shop.cart)
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.forEach(item => {
      count += item.qty
    })
    setCartCount(count)
  }, [cart, cartCount])

  return (
    <IconContext.Provider value={{ color: "#0b0f2d" }}>
      <Nav>
        <NavContainer>
          {/* Logo */}
          <NavLogo to="/">
            <img src={logo} alt="Logo" />
          </NavLogo>
          {/* Mobile toggle Icon */}
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <MenuWrapper click={click} onClick={handleClick}>
            {/* Navbar Menu items */}
            <NavMenu>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/shop">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
            </NavMenu>

            {/* search button and shopping Cart button */}
            <NavSearch>
              <SearchBtn>
                <SearchIcon />
              </SearchBtn>
            </NavSearch>

            {/* Log */}
            <Log>
              <SignIn to="/login">
                <SignInIcon className="signin__icon" />
                <SignInDesc className="signin__desc">Login </SignInDesc>
              </SignIn>
              <SignUp to="/register">
                <SignUpIcon className="signup__icon" />
                <SignUpDesc className="signup__desc">Register</SignUpDesc>
              </SignUp>
            </Log>
          </MenuWrapper>

          {/* Shopping Cart Button */}
          <ShoppingCartBtn to="/cart">
            <ShoppingCartIcon />
            <ShoppingCount>{cartCount}</ShoppingCount>
          </ShoppingCartBtn>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;