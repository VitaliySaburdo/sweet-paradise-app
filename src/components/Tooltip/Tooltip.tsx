import { TooltipWrapper, TooltipText } from "./Tooltip.styled";

interface Children {
  children: React.ReactNode;
  content: string;
}

export const Tooltip: React.FC<Children> = ({ children, content }) => {
  return (
    <>
      <TooltipWrapper>
        {children}
        <TooltipText>{content}</TooltipText>
      </TooltipWrapper>
    </>
  );
};
