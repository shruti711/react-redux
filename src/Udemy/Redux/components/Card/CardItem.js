import { useDispatch } from 'react-redux';
import './CardItem.css';
import { CardActions } from '../../Store/CardSlice';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

const addItemToCart = () => {
  dispatch(CardActions.addItemToCard({
    id,
    title,
    price
  }))
}

const removeItemFromCart = () => {
  dispatch(CardActions.removeItemToCard(id))
}
  return (
    <li className="Items">
      <header>
        <h3>{title}</h3>
        <div className="Items price">
          ${total.toFixed(2)}{' '}
          <span className="Items itemprice">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="Items details">
        <div className="Items quantity">
          x <span>{quantity}</span>
        </div>
        <div className="Items actions">
          <button onClick={addItemToCart}>+</button>
          <button onClick={removeItemFromCart}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
