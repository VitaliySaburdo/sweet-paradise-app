import { Wrapper, Box } from "./FeedbackItem.styled";

interface FeedbackItemProps {
  feedback: {
    id: number;
    user: string;
    date: Date;
    post: string;
  };
}

export const FeedbackItem: React.FC<FeedbackItemProps> = ({ feedback }) => {
  return (
    <>
      <Wrapper>
        <Box>
          <p>{feedback.user}</p>
          <p>{feedback.date.toLocaleDateString()}</p>
        </Box>
        <p>{feedback.post}</p>
      </Wrapper>
    </>
  );
};
