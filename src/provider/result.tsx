import { createContext, ReactNode, useEffect,  useState } from "react";
import { API_URL } from "../lib/constants";
import axios from "axios";
import { Page } from "../models/page";
import { User } from "../models/user";
import { useLocation } from "react-router-dom";
interface IResultContext{
  page:number;
  setPage:(n:number)=>void;
  pageSize:number;
  setPageSize:(n:number)=>void;
  keyword:string;
  setKeyword:(n:string)=>void;
  result:Page<User[]>;
  setResult:(result:Page<User[]>)=>void
}

export const ResultContext = createContext<IResultContext|undefined>(undefined);
interface ResultProps {
  children: ReactNode;
}
export const ResultProvider = ({children}:ResultProps)=>{
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState<Page<User[]>>({
    page,
    pageSize,
    total:0,
    totalPages:0,
    data:[]
  });
  // const [isSearch,setIsSearch] = useState(false);
  const location = useLocation();
  useEffect(()=>{
    const searchResults = async ()=>{
      const resultUrl = `${API_URL}users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
      const res = await axios.get<Page<User[]>>(resultUrl);
      if (res.status===200) {
        setResult(prevResult => ({
          page: res.data.page,
          pageSize: res.data.pageSize,
          total: res.data.total,
          totalPages: res.data.totalPages,
          data: page === 1 ? res.data.data : prevResult.data.concat(res.data.data),
        }));
      }
    };
    if (location.pathname==='/result') {
      searchResults();
    }
  },[page,pageSize,keyword]);
  
  return (
    <ResultContext.Provider value={{page,setPage,pageSize,setPageSize,keyword,setKeyword, result,setResult}}>
      {children}
    </ResultContext.Provider>
  )
}