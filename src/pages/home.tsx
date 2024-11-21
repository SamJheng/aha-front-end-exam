
import Navbar from "../components/nav-bar";

import { Outlet } from "react-router-dom";
import { ResultProvider } from "../provider/result";
import Profile from "../components/profile";
import { FollowProvider } from "../provider/follow";

const Home = ()=>{
  return (
    <div className="flex h-full">
      <div className="basis-20">
        <Navbar/>
      </div>
      <div className="basis-2/3 h-full">
        <ResultProvider>
          <Outlet />
        </ResultProvider>
        
      </div>
      <div className="basis-1/3 h-full">
        <FollowProvider>
          <Profile/>
        </FollowProvider>
        
      </div>
    </div>
  )
}
export default Home;