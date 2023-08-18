import { StyledButton  } from "./Button.styled";

interface Children {
  children: React.ReactNode;
}

export const Button: React.FC<Children> = ({children}) => {
    return (
        <>
            <StyledButton type="button">{ children }</StyledButton>
        </>
    )
}