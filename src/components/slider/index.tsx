
import { StyledSlider } from './styles'

const sliderMarks = [
  { value: 1, label: '3' },
  { value: 2, label: '6' },
  { value: 3, label: '9' },
  { value: 4, label: '12' },
  { value: 5, label: '15' },
  { value: 6, label: '50' }
]

type SliderProps = {
  defaultValue:number;
  min:number;
  max:number;
  onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
}

const Slider = ({ defaultValue,max,min,onChange }: SliderProps) => {

  return (
    <StyledSlider
      marks={sliderMarks}
      defaultValue={defaultValue}
      min={min}
      max={max}
      onChange={onChange}
    />
  )
}

export default Slider
