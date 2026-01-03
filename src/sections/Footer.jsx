import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
   <footer className='footer'>
        <div className='footer-container'>
            <div className='flex flex-col justify-center md:items-start'>
                Blogs Coming soon...
            </div>
            <div className='socials'>
                {socialImgs.map((img) =>(
                    <a className='icon' target="_blank" href={img.url} key={img.url}>
                        <img src={img.imgPath} />
                    </a>
                ))}
            </div>

            <div className='flex flex-col justify-items-center'>
                <p className='text-center md:text-end'>
                &copy; {new Date().getFullYear()}{"   "}Vinayak | All rights reserved
                </p>

            </div>
        </div>
   </footer>
  )
}

export default Footer