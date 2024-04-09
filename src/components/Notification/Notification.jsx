import React, { useContext } from "react";
import { CustomerInfoContext } from "../../context/CustomerInfoContext";

const Notification = () => {
  const { bookedList } = useContext(CustomerInfoContext);
  return (
    <div>
      {bookedList ? (
        <p>You can select your seats NOW</p>
      ) : (
        <p>Please insert your name and Number of Seats</p>
      )}
    </div>
  );
};

export default Notification;
