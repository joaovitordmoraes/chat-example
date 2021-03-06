import SaveButton from './styled'

function Button({ children, type }) {
  return (
    <SaveButton type={type}>{children}</SaveButton>
  );
}

export default Button;