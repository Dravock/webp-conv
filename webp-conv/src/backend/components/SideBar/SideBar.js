import React from 'react'

function SideBar() {
    const title = "One Piece World"

    const sb_buttons = [
        {
            title:"Dashboard",
            url:"/",
            icon:""
        },
        {
            title:"Medien",
            url:"/media",
            icon:""
        },
        {
            title:"Seiten",
            url:"/pages",
            icon:""
        },
        {
            title:"Plugins",
            url:"/plugins",
            icon:""
        },
        {
            title:"Einstellungen",
            url:"/preference",
            icon:""
        },
]


    return (
        <div className='flex flex-col h-[100vh] bg-black/40 col-span-2 p-4'>
            <h2 className='text-white font-bold'>{title}</h2>
                {sb_buttons.map(({title,url},index)=>
                    <a href={process.env.REACT_APP_BASE_URL+process.env.REACT_APP_ADMIN_AREA+url} className='mt-4 bg-black/20 text-gray-200 p-1' key={index}>{title}</a>
                )}
        </div>
    )
}

export default SideBar