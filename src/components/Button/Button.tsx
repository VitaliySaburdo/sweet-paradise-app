import { StyledButton } from "./Button.styled";

interface Children {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
}

export const Button: React.FC<Children> = ({
  children,
  customStyle,
  ...props
}) => {
  return (
    <>
      <StyledButton style={customStyle} {...props} type="button">
        {children}
      </StyledButton>
    </>
  );
};
