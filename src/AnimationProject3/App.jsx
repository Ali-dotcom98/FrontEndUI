import React from 'react'
import Home  from './Components/Home'
import Services from './Components/Services'
import Reviews from './Components/Reviews'
import ContactUs from './Components/ContactUs'
import AboutUs from './Components/AboutUs'
import NavigationBar from './Components/Header/NavigationBar'
import Footer from './Components/Footer/Footer'
import {ThemeProvider} from "./Context/ThemeContext"

const App = () => {
  return (
    <>
      <ThemeProvider>
        <div className='overflow-hidden'>
          <NavigationBar/>
          <Home/>
          <Services/>
          <AboutUs/>
          <Reviews/>
          <ContactUs/>
          <Footer/>
        </div>

      </ThemeProvider>
      

    </>
  )
}

export default App