import React from 'react'

export default function Footer() {
  return <>
    <footer className='bg-nav text-white bottom-0'>
      <div className="container ">
        <div className="row p-5">
          <div className="col-md-4">
            <div className='text-center'>
              <h3 className='text-uppercase bold-700'>location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className='text-center'>
              <h3 className='text-uppercase bold-700'>around the web</h3>
              <div>
                <ul className='p-0 d-flex justify-content-center align-items-center'>
                  <li className='mx-2'><i className="fa-brands fa-facebook"></i></li>
                  <li className='mx-2'><i className="fa-brands fa-twitter"></i></li>
                  <li className='mx-2'><i className="fa-brands fa-linkedin-in"></i></li>
                  <li className='mx-2'><i className="fa-solid fa-globe"></i></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className='text-center'>
              <h3 className='text-uppercase bold-700'>about freelance</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center p-3 bg-footer'>
        <p className='m-0'>Copyright © Your Website 2021</p>
      </div>
    </footer>
  </>
}