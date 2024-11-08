import React, { useState } from "react";
import styled from "styled-components";

const BookingContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputField = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 5px;
  cursor: pointer;
`;

function Booking() {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    dates: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Submitted!");
    console.log(bookingData);
  };

  return (
    <BookingContainer>
      <h1>Book Your Stay</h1>
      <BookingForm onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          placeholder="Your Name"
          value={bookingData.name}
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          name="email"
          placeholder="Your Email"
          value={bookingData.email}
          onChange={handleChange}
          required
        />
        <InputField
          type="date"
          name="dates"
          value={bookingData.dates}
          onChange={handleChange}
          required
        />
        <InputField
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={bookingData.guests}
          onChange={handleChange}
          min="1"
          max="10"
        />
        <SubmitButton type="submit">Book Now</SubmitButton>
      </BookingForm>
    </BookingContainer>
  );
}

export default Booking;
