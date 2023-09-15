import { FeedbackItem } from "../FeedbackItem/FeedbackItem";
import {Wrapper} from './FeedbackList.styled';

interface FeedbackProps {
  feedbacks: {
    id: number;
    user: string;
    date: Date;
    post: string;
  }[];
}

export const FeedbackList: React.FC<FeedbackProps> = ({ feedbacks }) => {
  return (
    <>
      <Wrapper>
        {feedbacks.map((feedback) => (
          <FeedbackItem key={feedback.id} feedback={feedback} />
        ))}
      </Wrapper>
    </>
  );
};
