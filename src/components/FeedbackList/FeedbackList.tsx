import { FeedbackItem } from "../FeedbackItem/FeedbackItem";

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
      <ul style={{ minHeight: "500px" }}>
        {feedbacks.map((feedback) => (
          <FeedbackItem key={feedback.id} feedback={feedback} />
        ))}
      </ul>
    </>
  );
};
