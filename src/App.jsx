
import './App.css'

import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const theme = createTheme({
    cssVariables: true,
    palette: {
      primary: {
        // Morning Birch
        main: '#e8c4a9'
      },
      secondary: {
        // Alpine Clay
        main: '#c29681'
      },
      tertiary: {
        // Misty Sage
        main: '#b9af91'
      },
      quatrenary: {
        // Evergreen Shadow
        main: '#6d7969'
      },
      accent: {
        // Wild Mustard
        main: '#d7A958'
      },

      background: {
        main: '#fff'
      }
    }
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
      </ThemeProvider>
    </>
  )
}

export default App
