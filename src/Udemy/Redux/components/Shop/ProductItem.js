import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import './ProductItem.css';
import { CardActions } from '../../Store/CardSlice';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  const addToCardHandler = () => {
    dispatch(CardActions.addItemToCard({
      id,
      price,
      title
    }))
  }

  return (
    <li className="Item">
      <Card>
        <header>
          <h3>{title}</h3>
          <div className="price">${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className="actions">
          <button onClick={addToCardHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
