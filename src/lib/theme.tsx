import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#181818',
          color: '#fff',
        },
        
      },
    },
    MuiSlider:{
      styleOverrides:{
        root:{
          color:'transparent'
        },
        markLabel: {
          color: '#fff', 
        },
        valueLabel: {
          color: '#fff',
        },
        rail:{
          backgroundColor: 'gray'
        },
        mark:{
          opacity: 0.38,
          backgroundColor: 'gray'
        },
        thumb:{
          '&:hover': {
            boxShadow:'0px 0px 0px 8px rgba(255, 208, 93, 0.16)'
          },
          '&:active': {
            boxShadow:'0px 0px 0px 8px rgba(255, 208, 93, 0.36)'
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#fff', 
        },
      },
    },
    MuiButton:{
      styleOverrides:{
        root:{
          padding:'6px 16px'
        },
        contained: {
          border:'2px solid #fff', 
          backgroundColor: '#fff',
          color: '#121212', 
          '&:hover': { 
            backgroundColor:'#121212',
            color: '#fff', 
          },
        },
        outlined: {
          border:'2px solid #fff',  
          backgroundColor:'#121212',
          color: '#fff', 
          '&:hover': {
            backgroundColor: '#fff',
            color: '#121212', 
          },
        },
      }
    },
    MuiSkeleton:{
      styleOverrides:{
        root:{
          backgroundColor: '#FFFFFF80'
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary:{
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    }
  },
})

export default theme
