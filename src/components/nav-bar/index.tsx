import { useLocation, useNavigate } from "react-router-dom";
import BadgeButton from "../badge-button";
import Logo from "../logo";

const Navbar = ()=>{
  const navigate = useNavigate();
  const location = useLocation();
  const handleSwitchRouter = (router:string)=>{
    navigate(router);
  }
  return (
    <div className="bg-[#1B1B1B] lg:h-full w-full h-16 flex justify-center lg:justify-start lg:flex-col">
      <div className="hidden lg:block">
        <Logo/>
      </div>
      <div onClick={()=>handleSwitchRouter('/')}>
        <BadgeButton active={location.pathname==='/search'||location.pathname==='/result'} >
          <p className=" text-sm">Home</p>
        </BadgeButton>
      </div>
      <div onClick={()=>handleSwitchRouter('/tags')}>
        <BadgeButton active={location.pathname==='/tags'} >
          <p className=" text-sm">Tab</p>
        </BadgeButton>
      </div>
    </div>
  );
}
export default Navbar;