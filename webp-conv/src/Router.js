// PATHS IMPORT
import App from './Pages/Public/App.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// IMPORTS FOR WEBSITE DESIGN




function Router() {


return (
    <>
        <BrowserRouter basename='/'>
                <Routes>
                    {/* PUBLIC PAGES */}
                        <Route path='/' element={<App />}/>
                </Routes>
        </BrowserRouter>
    </>
)};

export default Router;
