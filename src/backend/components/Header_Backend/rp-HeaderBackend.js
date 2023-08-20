import React from 'react'

function HeaderBackend() {

   
    const title = "Dashboard"

    const url= window.location.pathname
    const urlArray = url.split("/")

    return (
        <div className='flex w-full bg-slate-700 p-2'>
            {title}
            <a href={process.env.REACT_APP_BASE_URL} className='block text-white mx-4'>Zur Webseite</a>
        </div>
    )
}

export default HeaderBackend