import React from 'react'

function Footer() {
  return (
   <footer className='grid grid-cols-1 md:grid-cols-3 bg-gray-100 text-gray-600 p-5'>

    <div className='space-y-4 text-xs text-gray-800  mb-6'>
        <h5 className='font-bold'>About</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Lux</p>
    </div>

    <div className='space-y-4 text-xs text-gray-800 mb-6'>
        <h5 className='font-bold'>Hosting</h5>
        <p>Airbnb your home</p>
        <p>AirCover for Hosts</p>
        <p>Hosting resources</p>
        <p>Community forum</p>
        <p>Hosting responsibly</p>
        <p>Airbnb-friendly apartments</p>
        <p>Join a free Hosting class</p>
    </div>

    <div className='space-y-4 text-xs text-gray-800  mb-6'>
        <h5 className='font-bold'>Airbnb</h5>
        <p>Newsroom</p>
        <p>New features</p>
        <p>Careers</p>
        <p>Investors</p>
        <p>Gift cards</p>
    </div>


   </footer>
  )
}

export default Footer
