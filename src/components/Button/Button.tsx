import { StyledButton } from "./Button.styled";

interface Children {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  width?: string;
}

export const Button: React.FC<Children> = ({
  children,
  customStyle,
  ...props
}) => {
  return (
    <>
      <StyledButton {...props} type="button">
        {children}
      </StyledButton>
    </>
  );
};
