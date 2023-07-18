// EXTERNAL IMPORTS
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ThemeProvider} from '@mui/material/styles';

// INTERNAL IMPORTS
import {Home, Dashboard, SignIn} from './components/index'
import './index.css'
import {theme} from './Theme/themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home title={'Cosmos'}/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/signin' element={<SignIn/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)