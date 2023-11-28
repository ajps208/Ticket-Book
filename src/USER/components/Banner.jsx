import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import { allEventAPI } from "../Services/allApi";
import { BASE_URL } from "../Services/baseURL";

function Banner() {
  const navigate = useNavigate();
  const[allEvents,setAllEvents]=useState([])
  const[logged,setLogged]=useState(false)

  const handleButtonClick = (id) => {
    navigate(`/ticket/${id}`);
  };
  const handleLoginClick = () => {
    navigate('/login');
  };
  
  const getAllEvents=async()=>{
    const result=await allEventAPI()
    // console.log(result.data);
    setAllEvents(result.data.slice(0, 6));
  }
  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setLogged(true)
    }else{
      setLogged(false)
    }
    getAllEvents()},[logged])
 
  return (
    <>
     <Carousel    controls={false} indicators={false}   style={{position:"relative", boxShadow: '0 4px 8px rgba(255, 255, 0, 0.5)'}}  >
       {allEvents.map((events)=>( <Carousel.Item interval={3000} style={{ height: "50vh" }}>
          <img
           style={{position:"absolute",zIndex:"-1"}}
            className="img-fluid h-100 w-100"
            src={events.image?`${BASE_URL}/uploads/${events.image}`:"https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_1280.png"}
            text="First slide"
          />
          <div style={{position:"absolute",zIndex:"1"}} className="d-flex flex-column justify-content-center align-items-center p-3 w-100 text-light">
            <h2
              className="fs-1 fw-bolder "
              style={{
                textShadow:
                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", textTransform: "uppercase"
              }}
            >
              {events.name}
            </h2>

            <p
              className="col-md-6 col-sm-12 fs-5 fw-normal "
              style={{
                textAlign: "justify",
                textShadow:
                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
              }}
            >
             {events.description}
            </p>
            <button onClick={logged?()=>handleButtonClick(events._id):handleLoginClick}
              style={{
                textShadow:
                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
              }}
              className="btn btn-info"
            >
              Get Your Tickets
            </button>
          </div>
        </Carousel.Item>))
     }
      </Carousel>
    </>
  );
}

export default Banner;
