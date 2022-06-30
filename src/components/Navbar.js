import React from 'react'
import { Link } from 'react-router-dom'
// import "../styles.css"

const Navbar = () => {
  return (
    <>
   
    {/* <nav className="navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img className='iconImg same' src="https://icon-library.com/images/in-the-news-icon/in-the-news-icon-2.jpg" />
      <h3 className='same'> News India</h3>
      
    </a>
  </div>
</nav> */}

<ul className="nav">
  <li className='imgName'><img className='iconImg same' src="https://icon-library.com/images/in-the-news-icon/in-the-news-icon-2.jpg" alt="" />NEWS INDIA</li>
  <li><Link className='name' to='/' >Home</Link></li>
  <li><Link className='name' to="/sports">Sports</Link></li>
  <li><Link className='name' to="/health">Health</Link></li>

</ul>

    </>
  )
}

export default Navbar