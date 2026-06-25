import React from 'react'
import { Link } from "react-router-dom";
export default function Soon() {
  return (
    <div>
      <section className='coming-soon'>
        <div className='coming-soon-conntent'>
            <span className='coming-badge'>COMING SOON</span>
            <h1>
                Something <span>Awesome</span> Is coming
            </h1>
            <p>
                We're working hard to launch this feature.
            </p>
            <Link to='/' className='coming-btn'>Back To Home</Link>
        </div>
      </section>
    </div>
  )
}
