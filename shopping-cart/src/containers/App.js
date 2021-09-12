import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Typography from '@material-ui/core/Typography';

import BakeryItems from '../api/products.json';
import CandyFlaour from '../api/chocolate.json';
import CakeFlaour from '../api/cake.json';
import BreadFlaour from '../api/bread.json';

// style for card
const useStyles = makeStyles(() => ({
  root: {
    padding: 20,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  media: {
    height: 100,
    paddingTop: '56.25%',
    cursor: 'pointer',
    width: '100%',
  },
}));

const CardGroup = styled.div`
  width: 30%
`;

const ItemWrapper = styled.div`
    width: 100%;
    margin-top: 2rem;
    background-color: #e9dede;
`;

const CartButton = styled.div`
    font-size: 2rem;
    cursor: pointer;
    background-color: pink;
    border: 1px solid;
    width: 30%;
    margin: 0 auto;
    color: steelblue;
`;

const CardWrapper = styled.div`
   width: 1000px;
   @media only screen and (max-width: 768px) {
     width: 680px;
   }
   @media only screen and (max-width: 568px) {
    width: 100%;
   }
`;

const FixedHeader = styled.div`
    width: 100%;
    position: fixed;        
    background: #333;
    padding: 10px 0;
    color: #fff;
    top: 0;
`;

const List = styled.ul`
text-align: left;
>li {
    padding: 0.5rem;
    list-style : none;
    >a{
      text-decoration: none;
    }
}
`;

function Homepage({ setLoginUser }) {
  const classes = useStyles();

  const bakeryItems = BakeryItems;
  const [selectedItem, setSelectedItem] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);
  const [, settotalItem] = useState(0);
  const [checkoutItem, setCheckoutItem] = useState(false);
  const [orderProceed, setorderProceed] = useState(false);
  const [open, setOpen] = useState(false);

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  //remove item from card
  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  useEffect(() => {
    total();
  }, [cart]);

  useEffect(() => {
    totalItems();
  }, [cartTotal]);

  // all perticular item(cake, chocolate, bread) selected by the user 
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  // all the items selected by the user
  const totalItems = () => {
    let totalVal = 0;
    for (let i = 0; i < cartTotal.length; i++) {
      totalVal += cartTotal[i].price;
    }
    settotalItem(totalVal);
  };

  //after placed the order
  const PlacedOrder = () => {
    return (
      <div>
        <Typography variant="h3" color="initial" component="h1">
          Order is placed
        </Typography>
        <button onClick={() => setCheckoutItem(false)}>Cancel</button>
      </div>
    )
  };

  // when order placed delete selected items
  const proccedToPay = () => {
    var arr = [cartTotal];
    var arr1 = arr;
    arr = [];
    cart.length = 0;
    setCartTotal(arr);
    setorderProceed(true);
  };

  const Menu = () => {

    const [loginUser, setLoginUser] = useState();

    return (
      <Router>
        <div>
          <List>
            <li>
              {loginUser && loginUser.name ? (
                <button onClick={() => setLoginUser({})} >Logout</button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Support">Contact to Customer</Link>
            </li>
          </List>
        </div>
      </Router>
    )
  }

  const MenuItem = ({ open, setOpen }) => {
    return (
      <button open={open} onClick={() => setOpen(!open)}>
        Menu <i class="arrow right"></i>
      </button>
    )
  }

  return (
    <>
      <FixedHeader>
        <div class="container">
          <nav>
            <MenuItem open={open} setOpen={setOpen} />
            {open && (
              <Menu open={open} setOpen={setOpen} />
            )}
          </nav>
        </div>
      </FixedHeader>
      <CardWrapper>
        <Typography variant="body" color="Primary" component="h1">
          Welcome to Bakery
        </Typography>
        <Card className={classes.root}>
          {bakeryItems.map((t) => (
            <CardGroup>
              <CardMedia
                key={t.id}
                image={t.image}
                title={t.title}
                className={classes.media}
                onClick={() => setSelectedItem(t)}
              />
              <CardContent>
                <Typography variant="body" color="Primary" component="h3">
                  {t.name}
                </Typography>
              </CardContent>
            </CardGroup>
          ))}
        </Card>
      </CardWrapper>
    </>
  );
};

export default Homepage;












// import React from 'react'
// import ProductsContainer from './ProductsContainer'
// import CartContainer from './CartContainer'

// const App = () => (
//   <div>
//     <h2>Shopping Cart Example</h2>
//     <hr/>
//     <ProductsContainer />
//     <hr/>
//     <CartContainer />
//   </div>
// )

// export default App
