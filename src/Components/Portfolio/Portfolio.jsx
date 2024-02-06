import React from 'react'
import img1 from '../../Assets/images/poert1.png'
import img2 from '../../Assets/images/port2.png'
import img3 from '../../Assets/images/port3.png'

export default function Portfolio() {
  return <>
    <section>
        <div className='container'>
          <div className='pt-5 text-center'>
            <h2 className='text-uppercase mb-0 px-40 bold-700'>portfolio component</h2>
            <div className='star-contact position-relative py-2'><i class="fa-solid fa-star"></i></div>
          </div>
          <div className="row g-5 py-4">
            <div className="col-md-4">
              <div className='hover-img rounded overflow-hidden position-relative'>
                <img src={img1} className='w-100' alt="" />
                <div className='layer position-absolute'></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className='hover-img rounded overflow-hidden position-relative'>
                <img src={img2} className='w-100' alt="" />
                <div className='layer position-absolute'></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className='hover-img rounded overflow-hidden position-relative'>
                <img src={img3} className='w-100' alt="" />
                <div className='layer position-absolute'></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className='hover-img rounded overflow-hidden position-relative'>
                <img src={img1} className='w-100' alt="" />
                <div className='layer position-absolute'></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className='hover-img rounded overflow-hidden position-relative'>
                <img src={img2} className='w-100' alt="" />
                <div className='layer position-absolute'></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className='hover-img rounded overflow-hidden position-relative'>
                <img src={img3} className='w-100' alt="" />
                <div className='layer position-absolute'></div>
              </div>
            </div>
          </div>
        </div>
    </section>
  </>
}
