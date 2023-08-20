import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar/SideBar.js'
import Media from './rp-admin-media.js'
import Dashboard from './rp-admin-dashboard.js'
import Pages from './rp-admin-pages.js'
import Preferences from './rp-admin-preferences.js'
import Plugins from './rp-admin-plugins.js'


function RPADMIN() {


/*     { url === "/rp-admin/" ? null : <Dashboard /> }
    { url === "/rp-admin/media" ?  null  : <Media /> }
    { url === "/rp-admin/pages" ? null : <Pages /> }
    { url === "/rp-admin/preference" ? null : <Preferences /> }
    { url === "/rp-admin/plugins" ? null : <Plugins /> } */

    const url = window.location.pathname
    const [renderPage,setRenderPage] = useState({
        dashboard:true,
        pages: false,
        media:false,
        plugins:false,
        pref:false
    })

    
    useEffect(() => {
        switch (url) {
            case "/rp-admin/":
                setRenderPage({
                    dashboard:true,
                    pages: false,
                    media:false,
                    plugins:false,
                    pref:false
                })
                break;
            case "/rp-admin/pages":
                setRenderPage({
                    dashboard:false,
                    pages: true,
                    media:false,
                    plugins:false,
                    pref:false
                })
                break;
            case "/rp-admin/media":
                setRenderPage({
                    dashboard:false,
                    pages: false,
                    media:true,
                    plugins:false,
                    pref:false
                })
                break;
            case "/rp-admin/plugins":
                setRenderPage({
                    dashboard:false,
                    pages: false,
                    media:false,
                    plugins:true,
                    pref:false
                })
                break;
            case "/rp-admin/preference":
                setRenderPage({
                    dashboard:false,
                    pages: false,
                    media:false,
                    plugins:false,
                    pref:true
                })
                break;
        
            default:
                break;
        }
    }, [url])
    

    return (
        <div className='grid grid-cols-12'>
            <SideBar />
            <section id="rp-Content" className='col-span-10 p-4'>
                {renderPage.dashboard ? <Dashboard /> : null }
                {renderPage.pages ? <Pages /> : null }
                {renderPage.media ? <Media /> : null }
                {renderPage.plugins ? <Plugins /> : null }
                {renderPage.pref ? <Preferences /> : null }
            </section>
        </div>
    )
}

export default RPADMIN