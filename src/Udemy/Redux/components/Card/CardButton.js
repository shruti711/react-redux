import { useDispatch, useSelector } from 'react-redux';

import './CardButton.css';
import { uiActions } from '../../Store/UISlice';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const tooleCardHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className="Cardbutton" onClick={tooleCardHandler}>
      <span>My Cart</span>
      <span className="Cardbutton badge">{cartQuantity}</span>
    </button>
  );
};

export default CartButton;