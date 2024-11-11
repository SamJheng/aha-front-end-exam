
import { ReactNode } from "react";
import Button from "../button";

interface RadiusButtonProps {
  children: ReactNode;
  variant: 'outlined'|'contained'
}
const RadiusButton = ({children,variant }:RadiusButtonProps)=>{
  return (
    <Button variant={variant} borderRadius='20px'>
      {children}
    </Button>
  )
}
export default RadiusButton