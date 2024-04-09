import { createContext, useState } from "react";

export const CustomerInfoContext = createContext({});
export const CustomerInfoProvider = ({ children }) => {
  const [customerInfo, setCustomerInfo] = useState();
  const [bookedList, setBookedList] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState([null]); // State để lưu trữ ghế đã chọn
  return (
    <CustomerInfoContext.Provider
      value={{
        customerInfo,
        setCustomerInfo,
        bookedList,
        setBookedList,
        setSelectedSeat,
      }}
    >
      {children}
    </CustomerInfoContext.Provider>
  );
};
