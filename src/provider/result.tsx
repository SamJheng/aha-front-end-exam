import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { API_URL } from "../lib/constants";
import axios from "axios";
import { Page } from "../models/page";
import { User } from "../models/user";

interface IResultContext{
  page:number;
  setPage:(n:number)=>void;
  pageSize:number;
  setPageSize:(n:number)=>void;
  keyword:string;
  setKeyword:(n:string)=>void;
  result:Page<User[]>|undefined;
  setIsSearch:(b:boolean)=>void;
}

export const ResultContext = createContext<IResultContext|undefined>(undefined);
interface ResultProps {
  children: ReactNode;
}
export const ResultProvider = ({children}:ResultProps)=>{
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState<Page<User[]>|undefined>(undefined);
  const [isSearch,setIsSearch] = useState(false);
  useEffect(()=>{
    const searchResults = async ()=>{
      const result_url = `${API_URL}users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
      const res = await axios.get<Page<User[]>>(result_url);
      setResult(res.data)
    };
    if (isSearch) {
      searchResults();
    }
    
  },[page,pageSize,keyword])
  return (
    <ResultContext.Provider value={{page,setPage,pageSize,setPageSize,keyword,setKeyword, result,setIsSearch}}>
      {children}
    </ResultContext.Provider>
  )
}