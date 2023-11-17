import { ButtonContainer } from './Button.styles';

interface ButtonProps {
  color?: 'primary' | 'secondary';
  // children: React.ReactNode;
  // onClick?: () => void;
}

export function Button({ color = 'primary' }: ButtonProps) {
  return (
    <ButtonContainer> Enviar </ButtonContainer>
  )
}