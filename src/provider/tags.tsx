import { createContext, ReactNode, useEffect, useState } from "react";
import { API_URL } from "../lib/constants";
import { Tag } from "../models/tag";
import axios from "axios";
interface ITagsContext{
  tags:Tag[];
}
export const TagsContext = createContext<undefined|ITagsContext>(undefined);
interface TagsProps {
  children: ReactNode;
}
const getTagsApi = async ()=>{
  const resultUrl = `${API_URL}tags`;
  const res = await axios.get<Tag[]>(resultUrl);
  return res;
}
export const TagsProvider = ({children}:TagsProps)=>{
  const [tags,setTags] = useState<Tag[]>([]);
  let initialRender = true;
  useEffect(()=>{
    if (initialRender) {
      initialRender = false;
      (async () => {
        const res = await getTagsApi();
        if (res.status===200) {
          setTags(res.data)
        }
      })()
    }
  },[])

  return (
  <TagsContext.Provider value={{tags}}>
    {children}
  </TagsContext.Provider>)
}