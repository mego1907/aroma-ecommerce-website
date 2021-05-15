import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import SingleProduct from "./Pages/SingleProduct";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import {useSelector} from 'react-redux'

function App() {

  const currentItem = useSelector(state => state.shop.currentItem)
  return (
    <Router>
    <ScrollToTop />
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        {
          (!currentItem) ? (
            <Redirect to="/" />
          ) : (
            <Route path="/shop/:id" component={SingleProduct} />
          )
        }
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
