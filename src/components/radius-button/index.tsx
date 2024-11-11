
import { MouseEventHandler, ReactNode } from "react";
import Button from "../button";

interface RadiusButtonProps {
  children: ReactNode;
  variant: 'outlined'|'contained';
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}
const RadiusButton = ({children,variant,onClick }:RadiusButtonProps)=>{
  return (
    <Button variant={variant} borderRadius='20px' onClick={(e)=> onClick && onClick(e)}>
      {children}
    </Button>
  )
}
export default RadiusButton