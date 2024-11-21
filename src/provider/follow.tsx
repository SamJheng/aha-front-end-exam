import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { API_URL } from "../lib/constants";
import { Page } from "../models/page";
import { User } from "../models/user";

interface IFollowContext{
  tabName:number;
  setTabName:(n:number)=>void;
  followerList:User[];
  followingList:User[];
}
export const FollowContext = createContext<undefined|IFollowContext>(undefined);
interface FollowProps {
  children: ReactNode;
}
const followerApi = async (page:string,pageSize:string,)=>{
  const resultUrl = `${API_URL}users/all?page=${page}&pageSize=${pageSize}`;
  const res = await axios.get<Page<User[]>>(resultUrl);
  return res;
}
const followingApi = async (page:string,pageSize:string,)=>{
  const resultUrl = `${API_URL}users/friends?page=${page}&pageSize=${pageSize}`;
  const res = await axios.get<Page<User[]>>(resultUrl);
  return res;
}
export const FollowProvider = ({children}:FollowProps)=>{
  const [tabName, setTabName] = useState<number>(0);
  const [followerList, setFollowerList] = useState<User[]>([]);
  const [followingList, setFollowingList] = useState<User[]>([]);
  let initialRender = true;
  useEffect(()=>{
    if (initialRender) {
      initialRender = false;
      (async () => {
        const followerRes = await followerApi('1','10');
        const followingRes = await followingApi('1','10');
        setFollowerList(followerRes.data.data);
        setFollowingList(followingRes.data.data)
      })()
    }
  },[tabName])
  return (
  <FollowContext.Provider value={{tabName, setTabName,followerList,followingList}}>
    {children}
  </FollowContext.Provider>)
}