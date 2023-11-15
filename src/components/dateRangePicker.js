import React from "react";
import DatePicker from "react-datepicker";
import Container from "react-bootstrap/Container";

function DateRangePicker({startDate, endDate, handleDateChange, onCalendarClose}) {
  return (
    <Container className="w-1/4 m-0 mt-2">
      <div className="mb-2 text-xl font-bold">
        Find Caregiver Availability Here!
      </div>
      <div className="relative mb-1">
        <div className="search-bar relative">
          <DatePicker
            id="datepicker-input"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateChange}
            onCalendarClose={onCalendarClose}
            isClearable={true}
            minDate={new Date()}
            placeholderText="Start Date - End Date"
            className="w-full py-2 pr-10 pl-10 border border-black rounded-lg focus:ring focus:ring-blue-500 bg-white text-gray-700 text-xs"
          />
          <div
            className="search-icon absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => {
              document.getElementById("datepicker-input").click();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-500"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default DateRangePicker;
