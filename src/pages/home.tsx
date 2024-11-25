
import Navbar from "../components/nav-bar";

import { Outlet } from "react-router-dom";
import { ResultProvider } from "../provider/result";
import Profile from "../components/profile";
import { FollowProvider } from "../provider/follow";
import Logo from "../components/logo";

const Home = ()=>{
  return (
    <div className="flex h-full">
      <div className="basis-20 hidden lg:block">
        <Navbar/>
      </div>
      <div className="lg:basis-2/3 w-full h-full">
        <div className="block lg:hidden">
          <Logo/>
        </div>
        <ResultProvider>
          <Outlet />
        </ResultProvider>
        
      </div>
      <div className="xl:basis-1/3 hidden xl:block h-full">
        <FollowProvider>
          <Profile/>
        </FollowProvider>
        
      </div>
    </div>
  )
}
export default Home;