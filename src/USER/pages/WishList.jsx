import React from 'react'
import './WishList.css'

function WishList() {
  return (
    <>
     <div className="container d-flex flex-column justify-content-center align-items-center">
  <h2>WishList</h2>
  <ul className="responsive-table">
 
    <li className="table-row ">
      <div className="col col-1" data-label="Image"><img className='img-fluid w-50' src="https://img.etimg.com/thumb/width-640,height-480,imgsize-9102,resizemode-75,msid-99188557/news/sports/icc-reveals-logo-for-cricket-world-cup-2023-india-on-12th-anniversary-of-cwc-2011-triumph.jpg" alt="" /></div>
      <div className="col col-2" data-label="Name">IND VS AUS</div>
      <div className="col col-3" data-label="Ticket"><button className='btn btn-success'>BOOK</button></div>
      <div className="col col-3" data-label="Remove"><i class="fa-solid fa-trash"></i></div>
    </li>
  
  </ul>
</div>

    </>
  )
}

export default WishList