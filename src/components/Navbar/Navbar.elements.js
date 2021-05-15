import styled from 'styled-components';
import {Container} from '../../GlobalStyle'
import { FaUser, FaUserPlus, FaSearch } from "react-icons/fa";
import {FiShoppingCart} from 'react-icons/fi'
import {Link} from 'react-router-dom';


export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #0000002b;
  z-index: 99999999;
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled(Link)`
  height: 80px;
  display: flex;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    img {
      width: 90%;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    transform: translateY(77%);
    cursor: pointer;
    padding: 0 8px;
    
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-right: 4rem;
  transition: all 0.3s linear;

  @media screen and (min-width: 768px) and (max-width: 991px) {
    margin-right: 1rem;
  }

  @media screen and (max-width: 767px) {
    height: 100vh;
    width: 100%;
    z-index: 999999;
    flex-direction: column;
    justify-content: normal;
    align-items: center;
    position: fixed;
    top: 80px;
    left: ${({ click }) => (click ? "0" : "-100%")};
    margin: 0;
    background-color: #f1f6f7;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: 7rem;

  @media screen and (min-width: 768px) and (max-width: 991px) {
    margin-left: 2rem;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    margin-left: 0;
  }
`;

export const NavItem = styled.li`
  display: flex;
  height: 80px;
  align-items: center;
  padding: 0 20px;
  position: relative;
  text-align: center;

  @media screen and (min-width: 768px) and (max-width: 991px) {
    padding: 0 15px;
  }

  @media screen and (max-width: 767px) {
    padding: 0;
    width: 100%;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #222;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    color: #3549ec;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: #fff;
      background-color: #3549ec;
    }
  }
`;

export const NavSearch = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  margin: 0 10px;
  
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const SearchBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;

  &:hover {
    color: #3549ec !important;
  }
`;

export const SearchIcon = styled(FaSearch)`
  font-size: 1.1rem;
`;

export const Log = styled.div`
  display: flex;
`;

export const SignIn = styled(Link)`
  display: flex;
  height: 80px;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    .signin__icon,
    .signin__desc {
      color: red !important;
    }
  }
`;

export const SignInIcon = styled(FaUser)`
  color: #222;
`;

export const SignInDesc = styled.p`
  font-size: 1rem;
  padding: 8px;
  color: #222;
`;

export const SignUp = styled(Link)`
  text-decoration: none;
  display: flex;
  height: 80px;
  align-items: center;
  margin-left: 14px;
  cursor: pointer;

  &:hover {
    .signup__icon,
    .signup__desc {
      color: #3549ec !important;
    }
  }
`;

export const SignUpIcon = styled(FaUserPlus)`
  color: #222;
`;

export const SignUpDesc = styled.p`
  font-size: 1rem;
  padding: 8px;
  color: #222;
`;

export const ShoppingCartBtn = styled(Link)`
  text-decoration: none;
  display: flex;
  height: 80px;
  align-items: center;
  position: relative;

  @media screen and (max-width: 767px) {
    transform: translateX(-44px);
  }
`;

export const ShoppingCartIcon = styled(FiShoppingCart)`
  color: #222;
  font-size: 1.2rem;
`;

export const ShoppingCount = styled.span`
  width: 25px;
  height: 25px;
  background-color: #3549eccf;
  text-align: center;
  line-height: 25px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 12px;
  color: #fff;
  font-size: 0.8rem;
`;