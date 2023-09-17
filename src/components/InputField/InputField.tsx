import {StyledField} from './InputField.styled';
interface InputProps {
    type: string,
    id: string,
    name: string,
    placeholder: string
}

export const InputField: React.FC<InputProps> = ({ type, id, name, placeholder }) => {
  return (
    <>
      {" "}
      <StyledField
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};
