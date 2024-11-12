import { Skeleton } from "@mui/material";
import ResultItem from "../components/result-item";
import { ResultContext } from "../provider/result";
import { useContext, useEffect, useState } from "react";
import { User } from "../models/user";
import Button from "../components/button";


const Result = ()=>{
  const resultContext = useContext(ResultContext);
  const [result,setResult] = useState<User[]>([]);
  const SkeletonRenderer = Array.from(new Array(20)).map(() => {
    return (<>
      <Skeleton variant='rectangular' width={210} height={118} />
      <Skeleton />
    </>)
  })
  useEffect(()=>{
    console.log('useEffect')
    resultContext?.setIsSearch(true);
    setResult(result?.concat(resultContext?.result?.data as User[]))
  },[]);
  useEffect(()=>{
    setResult(result?.concat(resultContext?.result?.data as User[]))
  },[resultContext?.page]);
  const handleMore = ()=>{
    resultContext?.setPage(resultContext.page++);
  }
  return (
    <div className="h-full px-32 pt-16">
        {result  ? 
        <div className=" flex flex-wrap">
          {result.map((item,index)=>(
          <div key={index}>
            <ResultItem key={item.id} item={item}/>
          </div>
          ))}
          <div>
            <Button onClick={handleMore}>MORE</Button>
          </div>
        </div>
        : SkeletonRenderer}
      
    </div>
  )
}
export default Result;