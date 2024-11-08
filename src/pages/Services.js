import React from "react";
import styled from "styled-components";

const ServiceContainer = styled.div`
  padding: 2rem;
`;

const ServiceCard = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

function Services() {
  const services = [
    "High-Speed Internet",
    "Transportation",
    "Rental Services",
    "Food Delivery",
    "Tourism Support",
  ];

  return (
    <ServiceContainer>
      <h1>Our Services</h1>
      {services.map((service, index) => (
        <ServiceCard key={index}>
          <h3>{service}</h3>
        </ServiceCard>
      ))}
    </ServiceContainer>
  );
}

export default Services; // Changed from Home to Services
