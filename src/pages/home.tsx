
import Navbar from "../components/nav-bar";

import { Outlet } from "react-router-dom";
import { ResultProvider } from "../provider/result";

const Home = ()=>{
  return (
    <div className="flex h-full">
      <div className="basis-20">
        <Navbar/>
      </div>
      <ResultProvider>
        <div className="basis-2/3 h-full">
          <Outlet />
        </div>
      </ResultProvider>
    </div>
  )
}
export default Home;