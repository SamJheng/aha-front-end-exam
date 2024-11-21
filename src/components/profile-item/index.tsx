import { Avatar } from "@mui/material";
import RadiusButton from "../radius-button";
import FailImage from '../../assets/loading-fail.webp';
import { User } from "../../models/user";
import { useState } from "react";
interface ProfileItemProps {
  item: User;
}
const ProfileItem = ({ item }:ProfileItemProps)=>{
  const [imgSrc, setImgSrc] = useState<string>(item.avater);
  const handleError = () => {
    setImgSrc(FailImage);
  };
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center">
        <Avatar src={imgSrc} variant="square" onError={handleError}></Avatar>
        <div className="pl-4">
          <p className="font-bold">{item.name}</p>
          <p className="text-[#929292]">{item.username}</p>
        </div>
      </div>
      <div className="min-w-[64px]">
        {item.isFollowing===true?
          <RadiusButton  variant='contained'>
            Following
          </RadiusButton>
        :
          <RadiusButton  variant='outlined'>
            Follow
          </RadiusButton>
        }
      </div>
      
    </div>
  );
}
export default ProfileItem;