
import Navbar from "../components/nav-bar";
import { TagsContext, TagsProvider } from "../provider/tags";
import { IoIosArrowBack } from "react-icons/io";
import { Skeleton } from "@mui/material";
import TagItem from "../components/tag-item";
import { useNavigate } from "react-router-dom";

const Tags = ()=>{
  const navigate = useNavigate();
  const SkeletonRenderer = Array.from(new Array(20)).map(() => {
    return (<>
      <Skeleton variant='rectangular' width={210} height={118} />
      <Skeleton />
    </>)
  })
  const handlePrevPage = ()=>{
    navigate(`/search`);
    
  }
  return(
    <div className="flex h-full">
      <div className="basis-20 hidden lg:block">
        <Navbar/>
      </div>
      <div className="w-full h-full">
        <div className="h-full lg:px-32 px-6 lg:pt-16">
          <div className="block lg:hidden">
          <div className="flex items-center mt-2 mb-10" onClick={handlePrevPage}>
              <IoIosArrowBack />
              <span className="ml-2 text-xl font-bold">Home Page</span>
            </div>
          </div>
          <div className="flex items-center" >
            <span className="ml-2 text-xl font-bold">Tags</span>
          </div>
          <TagsProvider>
            <TagsContext.Consumer>
              {(c)=>(
                c?.tags && c?.tags.length >= 0?
                <div className="flex flex-wrap px-2">
                  {c?.tags.map((item,index)=>(
                    <TagItem key={index} tag={item}></TagItem>
                  ))}
                </div>
                :SkeletonRenderer
              )}
            </TagsContext.Consumer>
          </TagsProvider>
          
        </div>
      </div>
    </div>
  )
}
export default Tags;