import { Badge } from "@mui/material";
import IconClicked from '../../assets/IconClicked.svg';
import IconUnClicked from '../../assets/IconUnClicked.svg';
import { ReactNode, MouseEventHandler } from "react";
interface BadgeButtonProps {
  children: ReactNode;
  active:boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}
const BadgeButton = ({children, active}:BadgeButtonProps)=>{
  return (
    <Badge className="flex justify-center items-center flex-col w-20 h-20 cursor-pointer">
      <img
        src={active ? IconClicked : IconUnClicked}
        alt={active ? "Icon Clicked" : "Icon UnClicked"}
        width={24}
        height={24}
      />
      <div className="mt-1">
        <div className={active?'opacity-100':'opacity-0'} >
          {children}
        </div>
      </div>
      
    </Badge>
  )
};
export default BadgeButton;