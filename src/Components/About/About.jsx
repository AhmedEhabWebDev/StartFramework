import React from 'react'

export default function About() {
  return <>
    <section className='bg-section text-white py-5'>
      <div className='container py-5'>
        <div className='text-center pt-5'>
          <h2 className='text-uppercase mb-0 px-40 bold-700'>about component</h2>
          <div className='star position-relative py-2'><i class="fa-solid fa-star"></i></div>
        </div>
        <div className="d-flex justify-content-center align-items-center mx-auto pt-3 pb-5">
          <div className="col-md-6 max-w500 pb-4">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
          </div>
          <div className="col-md-6 max-w500 pb-4">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
          </div>
        </div>
      </div>
    </section>
  </>
}
