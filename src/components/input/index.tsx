import { Dispatch, SetStateAction } from "react"
import { StyledInput } from "./styles"
type InputProps = {
  onChange?: Dispatch<SetStateAction<string>>,
  placeholder?:string
}

const Input = ({ onChange, placeholder }: InputProps)=>{
  return (
    <>
      <StyledInput
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </>
  )
}
export default Input