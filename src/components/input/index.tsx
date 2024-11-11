import { ChangeEventHandler } from "react"
import { StyledInput } from "./styles"
type InputProps = {
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined,
  placeholder?:string
}

const Input = ({ onChange, placeholder }: InputProps)=>{
  return (
    <>
      <StyledInput
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e)}
      />
    </>
  )
}
export default Input