import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo}className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate inventore molestias harum, eaque fuga tempore ullam necessitatibus repellendus, temporibus cumque soluta eius, nisi fugiat. Maxime, ut doloremque! Tenetur, perferendis earum?</p>
        </div>

        <div>  
          <p className='text-cl font-medium md-5'></p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
            <p className='text-xl font medium md-5'>Get in Touch</p>
            <li>+1-212-456-7890</li>
            <li>conctact@foreveryou.com</li>
        </div>
      </div>

      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All right Reserved.</p>
      </div>
    </div>
)
}

export default Footer