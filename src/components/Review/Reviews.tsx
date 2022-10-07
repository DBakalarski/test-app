import { ReviewsInfo } from '../../types';

type ReviewsProps = {
  reviews: ReviewsInfo[];
};

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div>
      <h3>Recenzje</h3>
      <ul>
        {reviews[0]?.reviews.map((review) => {
          return (
            <li>
              <p>{review.text}</p>
              <p>Author: {review.author}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
