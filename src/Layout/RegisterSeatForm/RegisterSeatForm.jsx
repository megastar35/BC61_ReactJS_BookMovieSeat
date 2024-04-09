import React, { useContext } from "react";
import InputForm from "../../components/InputForm/InputForm";
import "./RegisterSeatForm.css";
import SeatList from "../../components/SeatList/SeatList";
import { CustomerInfoProvider } from "../../context/CustomerInfoContext";
import Notification from "../../components/Notification/Notification";
const RegisterSeatForm = () => {
  return (
    <div className="register_seat_form container">
      <CustomerInfoProvider>
        <InputForm />
        <Notification />
        <SeatList />
        <p className="bg-yellow-500 w-1/2 text-center py-5 tracking-widest font-bold my-5">
          SCREEN THIS WAY
        </p>
        <button className="rounded bg-white py-4 px-3 tracking-wide">
          Confirm Selection
        </button>
      </CustomerInfoProvider>
    </div>
  );
};

export default RegisterSeatForm;
