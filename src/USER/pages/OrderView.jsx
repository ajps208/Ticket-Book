import React from 'react'
import { Container } from 'react-bootstrap'
import './OrderView.css'

function OrderView() {
  return (
    <>
  
       
        <div className="container d-flex flex-column justify-content-center align-items-center">
  <h2>Orders</h2>
  <ul className="responsive-table">
    <li className="table-header">
      <div className="col col-1">Id</div>
      <div className="col col-2">Image</div>
      <div className="col col-3">Name</div>
      <div className="col col-4">Date & Venue</div>
      <div className="col col-5">Qty</div>
      <div className="col col-6">price</div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="Id">1</div>
      <div className="col col-2" data-label="Image"><img className='img-fluid w-50' src="https://img.etimg.com/thumb/width-640,height-480,imgsize-9102,resizemode-75,msid-99188557/news/sports/icc-reveals-logo-for-cricket-world-cup-2023-india-on-12th-anniversary-of-cwc-2011-triumph.jpg" alt="" /></div>
      <div className="col col-3" data-label="Name">IND VS AUS</div>
      <div className="col col-4" data-label="Date & Venue">17/5/2020 <br />mcs stadium india</div>
      <div className="col col-5" data-label="Qty">2</div>
      <div className="col col-6" data-label="price">500 RS</div>
    </li>
  
  </ul>
</div>



        
    </>
  )
}

export default OrderView