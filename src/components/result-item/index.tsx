import { useState } from "react";
import { User } from "../../models/user"
import FailImage from '../../assets/loading-fail.webp';
interface ResultItemProps {
  item: User;
}
const ResultItem = ({item}:ResultItemProps) => {
  const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + '...'
    }

    return str
  }
  const [imgSrc, setImgSrc] = useState<string>(item.avater);
  const handleError = () => {
    setImgSrc(FailImage);
  };

  return (
    <div className="p-4 lg:w-60 w-full lg:h-56 h-auto">
      <div className="lg:w-56 w-full lg:h-36 h-full">
        <img className=" max-h-full max-w-full" src={imgSrc}  loading="lazy" onError={handleError}  />
      </div>
      <div className="mt-4">
        <p className=" text-sm">{item.name && truncateString(item.name, 30)}</p>
        <p className=" text-xs">by {item.username}</p>
      </div>
    </div>
  )
}

export default ResultItem
