import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./USER/pages/LandingPage";
import EventsView from "./USER/pages/EventsView";
import BasicExample from "./USER/components/Header";
import TicketView from "./USER/pages/TicketView";
import Auth from "./USER/components/Auth";
import OrderView from "./USER/pages/OrderView";
import WishList from "./USER/pages/WishList";
import SuccessPayment from "./USER/pages/SuccessPayment";
import CancelPayment from "./USER/pages/CancelPayment";

function App() {
  return (
    <>
    <BasicExample/>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path='/login' element={<Auth />}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path="/events" element={<EventsView />}></Route>
        <Route path="/sports" element={<EventsView sports />}></Route>
        <Route path="/ticket/:id" element={<TicketView />}></Route>
        <Route path="/order" element={<OrderView />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/success" element={<SuccessPayment />}></Route>
        <Route path="/cancel" element={<CancelPayment />}></Route>
      </Routes>
    </>
  );
}

export default App;
