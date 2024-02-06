import React from 'react'
import img from '../../Assets/images/avataaars.svg'

export default function Home() {
  return <>
  <section className='bg-section p-5 text-white'>
    <div className='text-center'>
      <img src={img} className='w-250' alt="home image" />
      <div className='pt-5'>
        <h2 className='text-uppercase m-0 px-40 bold-700'>start framework</h2>
        <div className='star position-relative py-2'><i class="fa-solid fa-star"></i></div>
      </div>
      <div>Graphic Artist - Web Designer - Illustrator</div>
    </div>
  </section>
  </>
}
