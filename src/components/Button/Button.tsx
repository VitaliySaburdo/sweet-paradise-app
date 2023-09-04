import { StyledButton } from "./Button.styled";

interface Children {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  width?: string;
}

export const Button: React.FC<Children> = ({
  children,
  customStyle,
  type = "button",
  ...props
}) => {
  return (
    <>
      <StyledButton {...props} type={type}>
        {children}
      </StyledButton>
    </>
  );
};
