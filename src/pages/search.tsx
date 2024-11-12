
import { useContext, useEffect, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Slider from "../components/slider";
import { ResultContext } from "../provider/result";
import { useNavigate } from "react-router-dom";

const Search = ()=>{
  const resultContext = useContext(ResultContext);
  const [resultNumber,setResultNumber] = useState<number>(5);
  const [perNumber,setPerNumber] = useState<number>(30);
  const [search,setSearch] = useState<string>('');
  const navigate = useNavigate();

  useEffect(()=>{
    resultContext?.setIsSearch(false);
  })
  useEffect(()=>{
    setPerNumber(resultNumber <= 5 ? resultNumber * 3 : 50)
  },[resultNumber]);
  const handleSearch = ()=>{
    resultContext?.setPage(1);
    resultContext?.setPageSize(perNumber);
    resultContext?.setKeyword(search);
    resultContext?.setIsSearch(true);
    navigate(`/result`);
  }
  return (
    <div className="px-32 pt-16 w-full h-full flex flex-col justify-between">
      <div className="">
        <div className="w-full border-b-2 border-[#FFFFFF80] mb-8 pb-8">
          <h3 className=" text-xl mb-4">Search</h3>
          <div className="h-16">
            <Input placeholder="Keyword" onChange={(e)=>setSearch(e.target.value)}></Input>
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
        <Button onClick={handleSearch}>
          <p>Search</p>
        </Button>
      </div>
    </div>
  )
}
export default Search;