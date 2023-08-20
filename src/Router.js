// PATHS IMPORT
import AppS from './Pages/Public/AppS.js'

// IMPORTS FOR WEBSITE DESIGN
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Validation } from './includes/functions/Validation';
import  Header from  './components/Header/Header.js'
import  Footer from  './components/Footer/Footer.js'
import Cookies from 'universal-cookie';
import Characters from './Pages/Public/Characters.js';
import World from './Pages/Public/World.js';
import AboutUs from './Pages/Public/AboutUs.js';
import RPADMIN from './backend/pages/RP-ADMIN';
import HeaderBackend from './backend/components/Header_Backend/rp-HeaderBackend.js';



function Router() {

    const checkURL =()=>{
        const url = window.location.pathname
    
        const newURL = url.split("/")
    
        return newURL
    }

    const cookies = new Cookies()
    const token = cookies.get('token')

    const actPage = checkURL()



{/* useEffect(() => {
    (async()=>{
        try{
            if(token !== undefined && token !== null && token !== "" ){
            Validation()
            }
        } catch (error) {
            // Do Something on catch
        }
    })() 
}, [token])
*/}


return (
    <>
        <BrowserRouter basename='/'>
            {actPage[1] === "rp-admin" ? <HeaderBackend /> : <Header />  }
            <div className='container mx-auto'> 
                {/* REACT ROUTER ROUTES */}
                <Routes>
                    {/* PUBLIC PAGES */}
                        <Route path='/' element={<AppS />}/>
                        <Route path='/characters' element={<Characters />}/>
                        <Route path='/world' element={<World />}/>
                        <Route path='/about-us' element={<AboutUs />}/>
                        
                    {/* PRIVATE PAGES */}
                        <Route path='/test' element={<AboutUs />}/>
                </Routes>
            </div>

                <Routes>
                    {/* Private RP BACKEND Pages */}
                    <Route path='/rp-admin' element={<RPADMIN />}/>
                    <Route path='/rp-admin/media' element={<RPADMIN />}/>
                    <Route path='/rp-admin/pages' element={<RPADMIN />}/>
                    <Route path='/rp-admin/preference' element={<RPADMIN />}/>
                    <Route path='/rp-admin/plugins' element={<RPADMIN />}/>
                </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    </>
)};

export default Router;
