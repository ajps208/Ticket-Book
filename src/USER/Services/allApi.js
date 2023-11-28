import { BASE_URL } from "./baseURL";
import { commonAPI } from "./commonApi";

// register
export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}


// login
export const loginrAPI=async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")

}

// all events
export const allEventAPI=async()=>{
    return await commonAPI("GET",`${BASE_URL}/events/getevents`,"","")
}

// get one events
export const oneEventAPI=async(eventId)=>{
    return await commonAPI("GET",`${BASE_URL}/events/oneevent?id=${eventId}`,"","")
}

// all sports events
export const allSportsAPI=async(searchKey)=>{
    return await commonAPI("GET",`${BASE_URL}/events/getsports?search=${searchKey}`,"","")
}

// all other events
export const allOtherEventAPI=async(searchKey)=>{
    return await commonAPI("GET",`${BASE_URL}/events/getotherevents?search=${searchKey}`,"","")
}

// all other events
export const paymentAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/events/payment`,reqBody,reqHeader)
}