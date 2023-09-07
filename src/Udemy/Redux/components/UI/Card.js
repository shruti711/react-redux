import './Card.css';

const Card = (props) => {
  return (
    <section
      className="CardSelection"
    >
      {props.children}
    </section>
  );
};

export default Card;
