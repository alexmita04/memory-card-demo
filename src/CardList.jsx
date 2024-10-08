import PropTypes from "prop-types";
import "./CardList.css";

function Card({ name, imageUrl, cardClickHandler }) {
  return (
    <>
      <div className="card" onClick={cardClickHandler.bind(this, name)}>
        <img src={imageUrl} alt={name} />
        <p className="player-name">{name}</p>
      </div>
    </>
  );
}

export default function CardList({ footballers, cardClickHandler }) {
  return (
    <>
      <ul className="card-list">
        {footballers.map((player, index) => {
          return (
            <Card
              key={index}
              name={player.name}
              imageUrl={player.imgUrl}
              cardClickHandler={cardClickHandler}
            ></Card>
          );
        })}
      </ul>
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  cardClickHandler: PropTypes.func,
};

CardList.propTypes = {
  footballers: PropTypes.array,
  cardClickHandler: PropTypes.func,
};
