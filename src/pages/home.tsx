
import { useEffect, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Navbar from "../components/nav-bar";
import Slider from "../components/slider";

const Home = ()=>{
  const [resultNumber,setResultNumber] = useState<number>(5);
  const [perNumber,setPerNumber] = useState<number>(30);
  useEffect(()=>{
    setPerNumber(resultNumber <= 5 ? resultNumber * 3 : 50)
  },[resultNumber])
  return (
    <div className="flex h-full">
      <div className="basis-20">
        <Navbar/>
      </div>
      <div className="basis-2/3 h-full">
        <div className="px-32 pt-16 w-full h-full flex flex-col justify-between">
          <div className="">
            <div className="w-full border-b-2 border-[#FFFFFF80] mb-8 pb-8">
              <h3 className=" text-xl mb-4">Search</h3>
              <div className="h-16">
                <Input placeholder="Keyword"></Input>
              </div>
              
            </div>
            <div className="w-full">
              <h3 className=" text-xl mb-4">Of Results per page</h3>
              <h3 className=" text-xl mb-4">{perNumber} Result</h3>
              <Slider 
                defaultValue={resultNumber}
                min={1}
                max={6}
                onChange={(e,i)=>setResultNumber(i as number)}
              ></Slider>
            </div>
          </div>
          <div className="w-1/2 mb-16">
            <Button>
              <p>Search</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;