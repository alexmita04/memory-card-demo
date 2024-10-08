import PropTypes from "prop-types";
import "./Point.css";

export default function Points({ pts, bestScore }) {
  return (
    <>
      <p className="points">Score: {pts}</p>
      <p className="points">Best Score: {bestScore}</p>
    </>
  );
}

Points.propTypes = {
  pts: PropTypes.number,
  bestScore: PropTypes.number,
};
