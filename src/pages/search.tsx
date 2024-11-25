
import { useContext, useEffect, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Slider from "../components/slider";
import { ResultContext } from "../provider/result";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/nav-bar";

const Search = ()=>{
  const resultContext = useContext(ResultContext);
  const [resultNumber,setResultNumber] = useState<number>(5);
  const [perNumber,setPerNumber] = useState<number>(30);
  const [search,setSearch] = useState<string>('');
  const navigate = useNavigate();

  useEffect(()=>{
    resultContext?.setResult({
      page:1,
      pageSize:10,
      total:0,
      totalPages:0,
      data:[]
    })
  },[])
  useEffect(()=>{
    setPerNumber(resultNumber <= 5 ? resultNumber * 3 : 50)
  },[resultNumber]);
  const handleSearch = ()=>{
    resultContext?.setPage(1);
    resultContext?.setPageSize(perNumber);
    resultContext?.setKeyword(search);
    navigate(`/result`);
  }
  return (
    <div className="lg:px-32 px-6 lg:pt-16 w-full h-4/5 flex flex-col justify-between">
      <div className="">
        <div className="w-full border-b-2 border-[#FFFFFF80] mb-8 pb-8">
          <h3 className=" text-xl mb-4">Search</h3>
          <div className="h-16">
            <Input placeholder="Keyword" onChange={(e)=>setSearch(e.target.value)}></Input>
          </div>
          
        </div>
        <div className="w-full">
          <h3 className=" text-xl mb-4">Of Results per page</h3>
          <h3 className=" text-xl mb-4">
            <span className="text-4xl">{perNumber} </span> Result</h3>
          <Slider 
            defaultValue={resultNumber}
            min={1}
            max={6}
            onChange={(_e,i)=>setResultNumber(i as number)}
          ></Slider>
        </div>
      </div>
      <div className="lg:w-1/2 w-full mb-8">
        <Button onClick={handleSearch}>
          <p>Search</p>
        </Button>
      </div>
      <div className="lg:hidden block fixed bottom-0 w-full left-0">
        <Navbar/>
      </div>
    </div>
  )
}
export default Search;