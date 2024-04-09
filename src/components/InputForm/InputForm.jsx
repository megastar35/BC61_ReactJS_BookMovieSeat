import { useContext, useState } from "react";
import { Input, Button } from "antd";
import { CustomerInfoContext } from "../../context/CustomerInfoContext";
const InputForm = () => {
  const { customerInfo, setCustomerInfo, bookedList, setBookedList } =
    useContext(CustomerInfoContext);
  // console.log({ customerInfo });
  // console.log({ bookedList });

  const handleValueChange = (e) => {
    // console.log(e.target.value);
    const { name } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: e.target.value,
    });
  };

  const handleStartSelect = () => {
    setBookedList([...bookedList, customerInfo]);
  };

  return (
    <form className="p-10 ">
      <div className="flex gap-5 mb-4">
        <Input
          onChange={handleValueChange}
          placeholder="Number of Seats"
          size="large"
          name="numberOfSeat"
        />
        <Input
          onChange={handleValueChange}
          placeholder="Customer Name"
          name="customerName"
        />
      </div>
      <Button
        onClick={() => {
          handleStartSelect();
        }}
      >
        Start Select
      </Button>
    </form>
  );
};

export default InputForm;
