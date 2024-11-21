import BadgeButton from "../badge-button";
import Logo from "../logo";

const Navbar = ()=>{
  return (
    <div className="bg-[#1B1B1B] lg:h-full w-full h-16 flex justify-center lg:justify-start lg:flex-col">
      <div className="hidden lg:block">
        <Logo/>
      </div>
      <div>
        <BadgeButton active={true}>
          <p className=" text-sm">Home</p>
        </BadgeButton>
      </div>
      <div>
        <BadgeButton active={false}>
          <p className=" text-sm">Tab</p>
        </BadgeButton>
      </div>
    </div>
  );
}
export default Navbar;