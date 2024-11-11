
import { ReactNode } from "react";
import { StyledButton } from "./styles"
interface ButtonProps {
  children: ReactNode;
  borderRadius?:string;
  variant?: 'outlined'|'contained'
}
const Button = ({borderRadius ='4px', variant='contained',children }:ButtonProps)=>{
  return (
    <>
      <StyledButton variant={variant} style={{borderRadius}}>
        {children}
      </StyledButton>
    </>
  )
}
export default Button