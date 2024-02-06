import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
    <nav class="navbar navbar-expand-lg bg-nav p-4">
      <div class="container">
        <Link class="navbar-brand text-uppercase bold-700 px-32 text-white" to={'/'}>stert framework</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link text-uppercase text-white bold-700 bg-focus" to={'about'}>abuot</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-uppercase text-white bold-700 bg-focus" to={'portfolio'}>portfolio</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-uppercase text-white bold-700 bg-focus" to={'contact'}>contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}
