
import './App.css'

import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const theme = createTheme({
    cssVariables: true,
    palette: {
      primary: {
        main: '#000'
      },
      secondary: {
        // main: '#F56900'
        main: '#f50010'
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
