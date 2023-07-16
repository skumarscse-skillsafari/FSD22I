import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Ratings = ({ rating, onRating, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onRating(i)} style={style}>
          {rating > i ? (
            <AiFillStar fontSize={15} />
          ) : (
            <AiOutlineStar fontSize={15} />
          )}
        </span>
      ))}
    </>
  );
};

export default Ratings;
