import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./BookingTicketPage.css";
import RegisterSeatForm from "../RegisterSeatForm/RegisterSeatForm";

const BookingTicketPage = () => {
 
  const handleInputValue = (event) => {
    // setNumberOfSeat(event.target.value)
  };
  return (
    <div className="bookingTicket">
      <div className="regist_seat_form">
        <Header />
        <RegisterSeatForm handleInputValue={handleInputValue} />
      </div>
    </div>
  );
};

export default BookingTicketPage;
