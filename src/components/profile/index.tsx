import { Box, Skeleton, Tab, Tabs } from "@mui/material";
import { ReactNode, useContext, useEffect, useState } from "react";
import { FollowContext } from "../../provider/follow";
import ProfileItem from "../profile-item";
import { User } from "../../models/user";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}
const TabPanel = (props: TabPanelProps) =>{
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
const Profile = ()=>{
  const [value, setValue] = useState(0);
  const [followerList,setFollowerList] = useState<User[]>([]);
  const [followingList,setFollowingList] = useState<User[]>([]);
  const followContext = useContext(FollowContext);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(()=>{
    if (followContext?.followerList) {
      setFollowerList(followContext?.followerList)
    }
    
  },[followContext?.followerList])
  useEffect(()=>{
    if (followContext?.followingList) {
      setFollowingList(followContext?.followingList)
    }
  },[followContext?.followingList]);
  const SkeletonRenderer = Array.from(new Array(10)).map(() => {
    return <>
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <Skeleton
        animation="wave"
        height={10}
        width="80%"
        style={{ marginBottom: 6 }}
      />
      <Skeleton animation="wave" height={10} width="40%" />
    </>
  })
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} className=" w-full">
          <Tab className=" font-bold w-1/2" label="Followers" />
          <Tab className=" font-bold w-1/2" label="Following"  />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {followerList.length<=0?
          SkeletonRenderer
        :
          followerList.map((item,index)=>(<ProfileItem key={index} item={item}></ProfileItem>))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {followingList.length<=0?
          SkeletonRenderer
        :
          followingList.map((item,index)=>(<ProfileItem key={index} item={item}></ProfileItem>))}
      </TabPanel>
    </Box>
  );
}
export default Profile;