import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import './Card.css';
import CartItem from './CardItem';

const Cart = (props) => {
  const cardState = useSelector(state => state.cart.items)

  return (
    <Card className="Cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cardState.map(item => {
          return (
            <CartItem
              key={item.id}
              item={
                {
                  id: item.id,
                  title: item.name,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  price: item.price
                }
              }
            />
          )
        })}
      </ul>
    </Card>
  );
};

export default Cart;
