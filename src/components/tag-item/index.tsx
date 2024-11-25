import { Tag } from "../../models/tag";


interface TagItemProps {
  tag: Tag;
}
const TagItem = ({tag}:TagItemProps) => {


  return (
    <div className="p-4 lg:w-40 w-1/2 lg:h-56 h-full">
      <div className="flex flex-col justify-end w-full  h-28 rounded-lg bg-[#1B1B1B]">
        <div className="border-4 border-[#fff] rounded-lg mx-1 mb-2 p-1">
          <p className="font-bold text-xl truncate">{tag.name}</p>
        </div>
      </div>
      <div className="mt-4 text-white">
        <p className="text-sm truncate">{tag.name}</p>
        <p className="text-xs">{tag.count} Results</p>
      </div>
    </div>
  )
}

export default TagItem
