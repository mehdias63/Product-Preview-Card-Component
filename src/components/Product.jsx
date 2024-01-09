import React from 'react'

export default function Product() {
  return (
    <div className='w-[21.4375rem] h-[38.1875rem] bg-white rounded-lg'>
        <div>
            <img className='rounded-t-lg' src='../images/image-product-mobile.jpg' />
            </div>
            <div className='p-4'>
            <p className='text-[#6C7289]'>PERFUME</p>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p className='text-[#6C7289]'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <p className='text-[#6C7289]'><span className='text-[#3D8168]'>$149.99</span>$169.99</p>
            <button className='flex bg-[#3D8168] text-white'><img src='../images/icon-cart.svg' />Add to Cart</button>
            </div>
        
    </div>
  )
}
