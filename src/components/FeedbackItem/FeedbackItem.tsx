
interface FeedbackItemProps {
  feedback: {
    id: number;
    user: string;
    date: Date;
    post: string;
  };
}

export const FeedbackItem: React.FC<FeedbackItemProps> = ({feedback}) => {
    return <>
    <li >
            <p>{feedback.date.toLocaleDateString()}</p>
            <p>{feedback.user}</p>
            <p>{feedback.post}</p>
          </li>
    </>
}