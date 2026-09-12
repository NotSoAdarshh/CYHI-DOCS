import Navbar from './components/Header/Navbar'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'

function Layout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>

        
        
        </>
    )
}

export default Layout;