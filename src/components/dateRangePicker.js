import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Container from "react-bootstrap/Container";

function DateRangePicker() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <Container className="w-1/4 m-0 flex flex-col">
      <div className="w-full mb-1">
        <text>Search by Date:</text>
      </div>
      <div className="w mb-1">
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          isClearable={true}
          minDate={new Date()}
          placeholderText="Start Date - End Date"
          className="w-full py-2 pr-5 m-0 border border-black rounded-lg focus:ring focus:ring-blue-500 bg-white text-gray-700 text-xs"
        />
      </div>
    </Container>
  );
}

export default DateRangePicker;
