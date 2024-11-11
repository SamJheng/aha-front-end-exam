import { Slider } from '@mui/material'
import styled from 'styled-components'

export const StyledSlider = styled(Slider)`
  .MuiSlider-track {
    background-image: linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%) !important;
  }

  .MuiSlider-thumb {
    background: #1B1B1B;
    border: 6px solid #FFD05D
  }
  .MuiSlider-markLabel {
    color:#FFFFFF80;
  }
  .MuiSlider-markLabelActive {
    color:#FFF;
  }
`
