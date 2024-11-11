import { Dispatch, SetStateAction } from 'react'


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
  setResultPerPage: Dispatch<SetStateAction<number>>
}

const Slider = ({ setResultPerPage }: SliderProps) => {
  const onChangeHandler = (_: Event, newValue: number | number[]) => {
    setResultPerPage(newValue as number)
  }

  return (
    <StyledSlider
      marks={sliderMarks}
      defaultValue={5}
      min={1}
      max={6}
      onChange={onChangeHandler}
    />
  )
}

export default Slider
