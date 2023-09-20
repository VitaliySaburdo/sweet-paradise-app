import { StyledButton } from "./Button.styled";

interface Children {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  width?: string;
  margin?: string;
  height?: string;
  onClick?: () => void;
}

export const Button: React.FC<Children> = ({
  children,
  margin,
  onClick,
  type = "button",
  ...props
}) => {
  return (
    <>
      <StyledButton style={{ margin }} {...props} type={type} onClick={onClick}>
        {children}
      </StyledButton>
    </>
  );
};
