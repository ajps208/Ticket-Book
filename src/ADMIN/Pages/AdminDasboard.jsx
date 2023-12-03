import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DashPost from '../Components/DashPost';
import { searchEventsAPI } from '../../USER/Services/allApi';

function AdminDasboard() {
  const[searchKey,setSearchKey]=useState("")
  const[searchData,setSearchData]=useState([])

 
  const handleSearchEvent = async () => {
        
    const result = await searchEventsAPI(searchKey);
    if(result.status===200){
     setSearchData(result.data)
    }
};

useEffect(()=>{
    handleSearchEvent()
},[searchKey])
  return (
    <>
    <Row className=' w-100'>
    <Col   xs={12} md={2} lg={2} ><Sidebar/></Col>
     <Col  xs={12} md={10} lg={10}><Container className=' d-flex flex-column align-items-center justify-content-center' >
          <div className='w-100 d-flex align-items-center justify-content-between'>
          <h1 className='mt-5'>ALL EVENTS</h1>
          <input
           className='form-control w-25 mt-5'
           type="text"
           placeholder="Search events by name , place..."
            value={searchKey}
            onChange={(e=>setSearchKey(e.target.value))}
        
      />
          <div className='d-flex  mt-5 '>
            <Link style={{textDecoration:"none"}} to={'/adminsports'}><h6 className='text-dark'><i class="fa-solid fa-volleyball"></i> SPORTS</h6></Link>
            <Link style={{textDecoration:"none"}}to={'/adminevents'}><h6 className='ms-3 text-dark'><i class="fa-solid fa-guitar"></i> EVENTS</h6></Link>
          </div>
          </div>
          <DashPost event={searchData}/>
        </Container></Col>
      </Row>
    
    </>
  )
}

export default AdminDasboard