import React from "react";
import DatePicker from "react-datepicker";

function DateRangePicker({
  startDate,
  endDate,
  onChange,
  onCalendarClose,
  minDate,
  maxDate,
  excludeDates,
  inline
}) {
  return (
    <DatePicker
      id="datepicker-input"
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={onChange}
      onCalendarClose={onCalendarClose}
      isClearable={true}
      minDate={minDate}
      maxDate={maxDate}
      excludeDates={excludeDates}
      placeholderText="Start Date - End Date"
      className="w-full py-2 pr-10 pl-2 border border-black rounded-lg focus:ring focus:ring-blue-500 bg-white text-gray-700 text-xs"
      inline={inline}
    />
  );
}

export default DateRangePicker;
