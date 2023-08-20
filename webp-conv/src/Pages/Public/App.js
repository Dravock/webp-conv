import React, { useState } from 'react'
import axios from 'axios'


function App() {

  const [imgPreview_src, setImgPreview_src] = useState('')
  const [download, setDownload] = useState('')

  const submit = () => {
    
  }

  const inputListener = (e) => {
    setImgPreview_src({src:URL.createObjectURL(e.target.files[0]),name:e.target.files[0].name})
    console.log(e.target.files[0])
  }

  return (
    <main className="App w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-green-400 via-green-500 to-green-800">
      <div className='shadow-xl p-4 bg-white px-16'>
        <h1 className='text-3xl font-bold mb-4'>webP-Converter</h1>
        <section className=''>
          <p className='mb-4'>Convert your images to webP</p>
          <label htmlFor="file" className='flex flex-col text-left font-bold'>Choose you're file:
            <input type="file" name="file" id="file" onChange={inputListener} className="inputfile mt-1" />
          </label>
        </section>
        { imgPreview_src !== '' &&  
          <section className='mt-4'>
            <h3 className='text-left font-bold'>Preview</h3>
              <div className='w-full flex justify-between items-center '>

                <div className='w-24 h-24 flex items-center'>
                  <img src={imgPreview_src.src} alt="" />
                  <p className='pl-4 font-bold'>{imgPreview_src.name}</p>
                </div>
                {download !== '' ? 
                  <div>
                    <button className='bg-blue-500 text-white p-2 rounded-md h-fit' onClick={()=>submit()}>Download</button>	
                  </div>
                  : 
                  <div>
                    <button className='bg-blue-500 text-white p-2 rounded-md h-fit' onClick={()=>submit()}>Convert</button>	
                  </div>
                }
                
              </div>
            </section>
          }
      </div>
      

    </main>
  )
}

export default App
