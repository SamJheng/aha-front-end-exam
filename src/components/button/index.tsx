
import { MouseEventHandler, ReactNode } from "react";
import { StyledButton } from "./styles"
interface ButtonProps {
  children: ReactNode;
  borderRadius?:string;
  variant?: 'outlined'|'contained';
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}
const Button = ({borderRadius ='4px', variant='contained',children, onClick }:ButtonProps)=>{
  return (
    <>
      <StyledButton variant={variant} style={{borderRadius}} onClick={(e)=> onClick && onClick(e)}>
        {children}
      </StyledButton>
    </>
  )
}
export default Button