
interface FeedbackProps {
  feedbacks: {
    id: number;
    user: string;
    date: Date;
    post: string;
  }[];
}

export const FeedbackList: React.FC <FeedbackProps> = ({feedbacks}) => {
  return (
    <>
      <ul style={{ minHeight: "500px" }}>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            <p>{feedback.date.toLocaleDateString()}</p>
            <p>{feedback.user}</p>
            <p>{feedback.post}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
