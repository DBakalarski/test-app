import { ReviewsInfo } from '../../types';
import { StyledReviewContainer, StyledReviewsItem } from './Reviews.style';

type ReviewsProps = {
  reviews: ReviewsInfo[];
};

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <StyledReviewContainer>
      {reviews[0]?.reviews.length && (
        <>
          <h3>Recenzje</h3>
          <ul>
            {reviews[0]?.reviews.map((review) => {
              return (
                <StyledReviewsItem>
                  <p>{review.text}</p>
                  <p>
                    <span>Author:</span> {review.author}
                  </p>
                </StyledReviewsItem>
              );
            })}
          </ul>
        </>
      )}
    </StyledReviewContainer>
  );
};

export default Reviews;
