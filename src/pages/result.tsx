import { Skeleton } from "@mui/material";
import ResultItem from "../components/result-item";
import { ResultContext } from "../provider/result";
import { useContext, useEffect, useState } from "react";
import { User } from "../models/user";
import Button from "../components/button";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Result = ()=>{
  const resultContext = useContext(ResultContext);
  const [result,setResult] = useState<User[]>([]);
  const navigate = useNavigate();
  const SkeletonRenderer = Array.from(new Array(20)).map(() => {
    return (<>
      <Skeleton variant='rectangular' width={210} height={118} />
      <Skeleton />
    </>)
  })
  useEffect(()=>{
    setResult(resultContext?.result?.data as User[])
  },[resultContext?.result]);
  const handleMore = ()=>{
    resultContext?.setPage(resultContext.page+1);
  }
  const handlePrevPage = ()=>{
    navigate(`/search`);
    
  }
  return (
    <div className="h-full px-32 pt-16">
      <div className="flex items-center" onClick={handlePrevPage}>
        <IoIosArrowBack />
        <span className="ml-2 text-xl">Result</span>
      </div>
      {result.length > 0  ? 
      <div className="flex flex-wrap px-2">
        {result.map((item,index)=>(
        <div key={index}>
          <ResultItem key={item.id} item={item}/>
        </div>
        ))}
        
      </div>
      : SkeletonRenderer}
      {result && 
      <div className="py-4 pl-5 w-1/2">
        <Button onClick={handleMore}>MORE</Button>
      </div>}
    </div>
  )
}
export default Result;