import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import BasicExample from '../components/Header'
import Banner from '../components/Banner'
import RowPost from '../components/RowPost'
import { allOtherEventAPI, allSportsAPI } from '../Services/allApi'


function LandingPage() {
  const[sportsEvent,setSportEvent]=useState([])
  const[otherEvent,setOtherEvent]=useState([])
  const getSports=async()=>{
    try {
      const result=await allSportsAPI("")
      if(result.status===200){
        // console.log(result.data);

        setSportEvent(result.data.slice(0, 4));

      }else{
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }

  }
  const getOtherEvents=async()=>{
    try {
      const result=await allOtherEventAPI("")
      if(result.status===200){
        setOtherEvent(result.data.slice(0, 4));
      }else{
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getSports();
    getOtherEvents()
  }, []);
  return (
    <>
    {/* <BasicExample/> */}
    <Banner/>
    <RowPost event={sportsEvent} url={'/sports'} title={"Sports"}/>
    <RowPost event={otherEvent}  url={'/events'} title={"Events"}/>
    {/* <RowPost title={"Movies"}/> */}
    <Footer/>
    </>
  )
}

export default LandingPage