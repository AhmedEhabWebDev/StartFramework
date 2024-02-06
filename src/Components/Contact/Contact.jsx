import React from 'react'

export default function Contact() {
  return <>
    <section>
      <div>
          <div className='pt-5 text-center'>
            <h2 className='text-uppercase mb-0 px-40 bold-700'>contact section</h2>
            <div className='star-contact position-relative py-2'><i class="fa-solid fa-star"></i></div>
          </div>
          <form className='w-50 p-3 mx-auto mt-5'>
            <input type="text" className='form-control border-0 border-bottom rounded-2 py-4' placeholder='userName' />
            <input type="number" className='form-control border-0 border-bottom rounded-2 py-4' placeholder='userAge' />
            <input type="email" className='form-control border-0 border-bottom rounded-2 py-4' placeholder='userEmail' />
            <input type="password" className='form-control border-0 border-bottom rounded-2 py-4' placeholder='userPassword' />
            <button type='submit' className='bg-section btn text-white mt-4 hover-none'>Send Massage</button>
          </form>
      </div>
    </section>
  </>
}
