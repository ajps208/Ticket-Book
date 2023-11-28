import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SuccessPayment() {
  const [ticket, setTicket] = useState(null);
  const [paymentId, setPaymentId] = useState(null);
  const [seatname, setSeatname] = useState(null);
  const [userId, setUserId] = useState(null);
  const [noOfTickets, setNoOfTickets] = useState(null);
  const [ticketprice, setTicketPrice] = useState(null);

  useEffect(() => {
    // Extract query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const ticketParam = urlParams.get('ticket');
    const paymentIdParam = urlParams.get('payment_id');
    const seatnameParam = urlParams.get('seatname');
    const userIdParam = urlParams.get('userId');
    const noOfTicketsParam = urlParams.get('noOfTickets');
    const ticketPriceParam = urlParams.get('ticketprice');

    // Decode and parse the ticket parameter
    if (ticketParam) {
      const decodedTicket = JSON.parse(decodeURIComponent(ticketParam));
      setTicket(decodedTicket);
    }

    // Set the paymentId state
    if (paymentIdParam) {
      setPaymentId(paymentIdParam);
    }

    // Set seatname, userId, and noOfTickets states
    if (seatnameParam) {
      setSeatname(decodeURIComponent(seatnameParam));
    }
    if (userIdParam) {
      setUserId(decodeURIComponent(userIdParam));
    }
    if (noOfTicketsParam) {
      setNoOfTickets(parseInt(noOfTicketsParam, 10));
    }

    // Set ticketprice state
    if (ticketPriceParam) {
      setTicketPrice(parseFloat(ticketPriceParam));
    }
  }, []);

// style
  const containerStyle = {
    maxWidth: '80%', // Adjusted for responsiveness
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  };

  const headingStyle = {
    fontSize: '28px', // Adjusted for responsiveness
    textAlign: 'center',
    color: '#28a745',
    marginBottom: '20px',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const subheadingStyle = {
    fontSize: '20px', // Adjusted for responsiveness
    color: '#007bff',
    marginBottom: '10px',
  };

  const textStyle = {
    fontSize: '16px', // Adjusted for responsiveness
  };

  return (
    <Container className='mt-5' style={containerStyle}>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h4 style={headingStyle}><i class="fa-regular fa-circle-check"></i> Payment Success</h4>
          {ticket && (
            <div style={sectionStyle}>
              <h2 style={subheadingStyle}>Ticket Information</h2>
              <p style={textStyle}><span className=''>Event</span>: <span className='text-uppercase text-muted'>{ticket.name}</span></p>
              {/* Add more ticket information as needed */}
            </div>
          )}
          {seatname && (
            <p style={textStyle}>Seat Name: <span className='text-muted'>{seatname}</span></p>
          )}
          {noOfTickets && (
            <p style={textStyle}>Number of Tickets:<span className='text-muted'> {noOfTickets}</span></p>
          )}
          {ticketprice && (
            <p style={textStyle}>Ticket Price:<span className='text-muted'> {ticketprice} ₹</span></p>
          )}
          {paymentId && (
            <div style={sectionStyle}>
              <p style={{ ...textStyle, wordBreak: 'break-all' }}>Reference ID: <span className='text-muted'>{paymentId}</span></p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default SuccessPayment;
